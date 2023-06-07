import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

mongoose.set("strictQuery", true);

async function connectMongo() {
  try {
    const dbHost = process.env.DB_HOST ?? "";
    // console.log("dbHost", dbHost);

    await mongoose.connect(dbHost);

    console.log("DB connected succesfull");
  } catch (error) {
    console.log("DB connection error: ", error.message);
  }
}

export { connectMongo };
