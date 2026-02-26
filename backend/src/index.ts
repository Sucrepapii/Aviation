import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

import authRoutes from "./routes/authRoutes";
import bookingRoutes from "./routes/bookingRoutes";

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Main App Routes
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);

// Basic Health Route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Flivan Aviation API is running smoothly.",
  });
});

// Server Initialization
const startServer = async () => {
  try {
    await prisma.$connect();
    console.log("🔗 Database connected successfully");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
    process.exit(1);
  }
};

startServer();
