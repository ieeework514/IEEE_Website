import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const client = await clientPromise;
    const db = client.db("ieee-events");
    const collection = db.collection("registrations");

    const { name, rollNumber, email, hackerrankId, whatsappNumber, event } = req.body;

    if (!name || !rollNumber || !email || !hackerrankId || !whatsappNumber || !event) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const result = await collection.insertOne({
      name,
      rollNumber,
      email,
      hackerrankId,
      whatsappNumber,
      event,
      createdAt: new Date(),
    });

    res.status(201).json({ message: "Registration successful", id: result.insertedId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}
