import express from "express";
import { getFlights, getFlightById } from "../controllers/flightController";

const router = express.Router();

router.get("/", getFlights);
router.get("/:id", getFlightById);

export default router;
