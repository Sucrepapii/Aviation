import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const flights = await prisma.flight.findMany({
    take: 5,
    select: {
      originIata: true,
      destinationIata: true,
      departureTime: true,
      airline: true,
    },
  });
  console.log(JSON.stringify(flights, null, 2));
}

main().finally(() => prisma.$disconnect());
