import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to Database");
        // return mongoose.connection.db;
    }catch (error) {
        console.error("Database connection failed", error);
        process.exit(1);  // exit process with failure
    }
}