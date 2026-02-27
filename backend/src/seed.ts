import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const popularDestinations = [
  { iata: "DXB", city: "Dubai" },
  { iata: "CDG", city: "Paris" },
  { iata: "SIN", city: "Singapore" },
  { iata: "KUL", city: "Kuala Lumpur" },
  { iata: "YYZ", city: "Toronto" },
  { iata: "HND", city: "Tokyo" },
];

const origins = [
  { iata: "LHR", city: "London" },
  { iata: "JFK", city: "New York" },
];

const airlines = [
  "Emirates",
  "Qatar Airways",
  "Singapore Airlines",
  "British Airways",
  "Air France",
  "Japan Airlines",
  "Flivan Airways",
];

const generateFlights = () => {
  const flights: any[] = [];
  const today = new Date();

  // Create flights for the next 3 years (~1095 days) to ensure results are always found
  for (let d = 0; d < 1095; d++) {
    const flightDate = new Date(today);
    flightDate.setDate(today.getDate() + d);

    origins.forEach((origin) => {
      popularDestinations.forEach((dest, index) => {
        // Create 2 flights per route per day
        for (let i = 0; i < 2; i++) {
          const departure = new Date(flightDate);
          departure.setHours(8 + index + i * 6, 30, 0, 0); // e.g., 08:30, 14:30

          const arrival = new Date(departure);
          arrival.setHours(
            departure.getHours() + 6 + Math.floor(Math.random() * 4),
            Math.floor(Math.random() * 60),
            0,
            0,
          ); // +6 to 10 hours

          const isPremium = i % 2 === 0;

          flights.push({
            flightNumber: `FL${Math.floor(Math.random() * 90000) + 10000}-${d}-${index}-${i}`,
            airline: airlines[Math.floor(Math.random() * airlines.length)],
            originIata: origin.iata,
            originCity: origin.city,
            destinationIata: dest.iata,
            destinationCity: dest.city,
            departureTime: departure,
            arrivalTime: arrival,
            basePrice: isPremium
              ? 2500 + Math.random() * 1000
              : 400 + Math.random() * 300,
            availableSeats: isPremium ? 12 : 150,
            travelClass: isPremium ? "First Class" : "Economy",
          });
        }
      });
    });
  }

  return flights;
};

async function main() {
  console.log("Seeding the database with flights...");

  // Clear existing flights if needed
  await prisma.flight.deleteMany({});

  const flights = generateFlights();

  console.log(`Prepared ${flights.length} flights! Inserting...`);

  await prisma.flight.createMany({
    data: flights,
  });

  console.log("Flights seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
