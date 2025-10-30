import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import connectDB from "./configs/db.js";
import clerkWebhooks from "./controllers/clerkWebhooks.js";
import mongoose from "mongoose";

// ✅ Load .env file
dotenv.config({ path: "./.env" });

// ✅ Connect MongoDB
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// ✅ Clerk webhook route
app.use("/api/clerk", clerkWebhooks);

// ✅ Define a simple Hotel model (if not already created)
const hotelSchema = new mongoose.Schema({
  name: String,
  location: String,
  price: Number,
  image: String,
});

const Hotel = mongoose.model("Hotel", hotelSchema);

// ✅ Add /api/hotels route
app.get("/api/hotels", async (req, res) => {
  try {
    // if MongoDB has data
    const hotels = await Hotel.find();
    if (hotels.length === 0) {
      // fallback dummy data
      return res.json([
        { id: 1, name: "The Grand Hotel", location: "Goa", price: 12000 },
        { id: 2, name: "Royal Stay", location: "Jaipur", price: 9500 },
        { id: 3, name: "Seaside Paradise", location: "Kerala", price: 15000 },
      ]);
    }
    res.json(hotels);
  } catch (err) {
    console.error("❌ Error fetching hotels:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Root route
app.get("/", (req, res) => res.send("🏨 Hotel Booking API is working ✅"));

// ✅ Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
