"use server"

import { type NextRequest, NextResponse } from "next/server"
import { saveContactMessage, type ContactMessage } from "@/lib/mongodb"
import { headers } from "next/headers"

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json()
    const { name, email, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, and message are required" },
        { status: 400 },
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Get client information
    const headersList = headers()
    const ipAddress = headersList.get("x-forwarded-for") || headersList.get("x-real-ip") || "unknown"
    const userAgent = headersList.get("user-agent") || "unknown"

    // Prepare message data
    const messageData: Omit<ContactMessage, "_id" | "createdAt" | "status"> = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      ipAddress,
      userAgent,
    }

    // Save to database
    const savedMessage = await saveContactMessage(messageData)

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully! I'll get back to you soon.",
        id: savedMessage._id,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Contact form error:", error)

    return NextResponse.json(
      {
        error: "Failed to send message. Please try again later.",
        details: process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 },
    )
  }
}

// Optional: GET endpoint to retrieve messages (for admin use)
export async function GET(request: NextRequest) {
  try {
    // Add authentication check here in production
    const { searchParams } = new URL(request.url)
    const limit = Number.parseInt(searchParams.get("limit") || "50")

    const { getContactMessages } = await import("@/lib/mongodb")
    const messages = await getContactMessages(limit)

    return NextResponse.json({
      success: true,
      messages,
      count: messages.length,
    })
  } catch (error) {
    console.error("Error fetching messages:", error)
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 })
  }
}
