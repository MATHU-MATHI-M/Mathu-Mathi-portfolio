import { MongoClient, type Db, type Collection, ObjectId } from "mongodb"

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const uri = process.env.MONGODB_URI
const options = {}

let client: MongoClient
let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  const globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>
  }

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options)
    globalWithMongo._mongoClientPromise = client.connect()
  }
  clientPromise = globalWithMongo._mongoClientPromise!
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise

// Database and collection helpers
export async function getDatabase(): Promise<Db> {
  const client = await clientPromise
  return client.db("portfolio")
}

export async function getContactCollection(): Promise<Collection> {
  const db = await getDatabase()
  return db.collection("contacts")
}

// Contact message interface
export interface ContactMessage {
  _id?: string
  name: string
  email: string
  message: string
  createdAt: Date
  status: "new" | "read" | "replied"
  ipAddress?: string
  userAgent?: string
}

// Database operations
export async function saveContactMessage(
  messageData: Omit<ContactMessage, "_id" | "createdAt" | "status">,
): Promise<ContactMessage> {
  try {
    const collection = await getContactCollection()

    const contactMessage: Omit<ContactMessage, "_id"> = {
      ...messageData,
      createdAt: new Date(),
      status: "new",
    }

    const result = await collection.insertOne(contactMessage)

    return {
      _id: result.insertedId.toString(),
      ...contactMessage,
    }
  } catch (error) {
    console.error("Error saving contact message:", error)
    throw new Error("Failed to save contact message")
  }
}

export async function getContactMessages(limit = 50): Promise<ContactMessage[]> {
  try {
    const collection = await getContactCollection()

    const messages = await collection.find({}).sort({ createdAt: -1 }).limit(limit).toArray()

    return messages.map((msg: any) => ({
      ...msg,
      _id: msg._id.toString(),
    }))
  } catch (error) {
    console.error("Error fetching contact messages:", error)
    throw new Error("Failed to fetch contact messages")
  }
}

export async function updateMessageStatus(messageId: string, status: ContactMessage["status"]): Promise<boolean> {
  try {
    const collection = await getContactCollection()

    const result = await collection.updateOne({ _id: new ObjectId(messageId) }, { $set: { status } })

    return result.modifiedCount > 0
  } catch (error) {
    console.error("Error updating message status:", error)
    throw new Error("Failed to update message status")
  }
}

// Utility function to test connection
export async function testConnection(): Promise<boolean> {
  try {
    const client = await clientPromise
    await client.db("admin").command({ ping: 1 })
    console.log("✅ MongoDB connection successful")
    return true
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error)
    return false
  }
}
