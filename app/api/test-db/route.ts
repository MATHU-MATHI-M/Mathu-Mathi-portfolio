import { NextResponse } from "next/server"
import { testConnection } from "@/lib/mongodb"

export async function GET() {
  try {
    const isConnected = await testConnection()

    if (isConnected) {
      return NextResponse.json({
        success: true,
        message: "MongoDB connection successful",
      })
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "MongoDB connection failed",
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Test connection error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Error testing MongoDB connection",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
