import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    console.log(typeof process.env.MONGO_DB_URI);
    await mongoose.connect(process.env.MONGO_DB_URI, {
      retryWrites: false,
    });
  } catch (error) {
    console.log("Error connecting to MongoDB", error.message);
  }
};

export default connectToMongoDB;
