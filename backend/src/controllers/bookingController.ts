import { Response } from "express";
import { PrismaClient } from "@prisma/client";
import { AuthRequest } from "../middlewares/authMiddleware";

const prisma = new PrismaClient();

// Get logged in user's bookings
export const getMyBookings = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      res.status(401).json({ message: "User not authenticated" });
      return;
    }

    const bookings = await prisma.booking.findMany({
      where: { userId },
      orderBy: { date: "desc" }, // Assuming string dates for MVP
    });

    res.status(200).json(bookings);
  } catch (error) {
    console.error("Fetch Bookings Error:", error);
    res.status(500).json({ message: "Server error fetching bookings." });
  }
};

// Create a new booking
export const createBooking = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      res.status(401).json({ message: "User not authenticated" });
      return;
    }

    const { flightNo, date, route, travelClass } = req.body;

    if (!flightNo || !date || !route || !travelClass) {
      res.status(400).json({ message: "Missing booking details." });
      return;
    }

    const booking = await prisma.booking.create({
      data: {
        userId,
        flightNo,
        date,
        route,
        class: travelClass,
        status: "Scheduled",
      },
    });

    // MVP: Reward points for booking
    await prisma.user.update({
      where: { id: userId },
      data: { points: { increment: 1500 } },
    });

    res.status(201).json({ message: "Booking successful", booking });
  } catch (error) {
    console.error("Create Booking Error:", error);
    res.status(500).json({ message: "Server error creating booking." });
  }
};
