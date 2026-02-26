import express from "express";
import { getMyBookings, createBooking } from "../controllers/bookingController";
import { protect } from "../middlewares/authMiddleware";

const router = express.Router();

// Apply auth middleware to all booking routes
router.use(protect);

router.get("/", getMyBookings);
router.post("/", createBooking);

export default router;
