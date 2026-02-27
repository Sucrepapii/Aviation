import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// @desc    Get all flights or search via query parsing
// @route   GET /api/flights
// @access  Public
export const getFlights = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { origin, destination, date } = req.query;

    // Build generic dynamic filter
    let filter: any = {};

    if (origin) {
      filter.originIata = { contains: origin as string };
    }

    if (destination) {
      filter.destinationIata = { contains: destination as string };
    }

    // Parse date for same-day bounds filtering if provided
    if (date) {
      const searchDate = new Date(date as string);
      if (!isNaN(searchDate.getTime())) {
        const nextDay = new Date(searchDate);
        nextDay.setDate(searchDate.getDate() + 1);

        filter.departureTime = {
          gte: searchDate,
          lt: nextDay,
        };
      }
    }

    // Fetch matched flights (limit to 50 max to avoid overloading UI)
    const flights = await prisma.flight.findMany({
      where: filter,
      orderBy: { departureTime: "asc" },
      take: 50,
    });

    res.json(flights);
  } catch (error) {
    console.error("Fetch Flights Error:", error);
    res.status(500).json({
      message: "Server currently unavailable. Please try again later.",
    });
  }
};

// @desc    Get single flight by ID
// @route   GET /api/flights/:id
// @access  Public
export const getFlightById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const flight = await prisma.flight.findUnique({
      where: { id: req.params.id as string },
    });

    if (flight) {
      res.json(flight);
    } else {
      res.status(404).json({ message: "Flight not found." });
    }
  } catch (error) {
    console.error("Fetch Flight Error:", error);
    res.status(500).json({ message: "Server error fetching flight." });
  }
};
