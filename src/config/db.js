import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//check if dab is connected or not
async function checkDBConnection() {
  try {
    await prisma.$connect();
    console.log(`Connected to database`);
  } catch (err) {
    console.error("Database connection error:", err);
  }
}
 
checkDBConnection();

export default prisma;

