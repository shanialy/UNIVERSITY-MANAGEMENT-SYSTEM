import mongoose from "mongoose";

const dbPassword =
  "mongodb+srv://shani:chaudhry@cluster0.bqlqg.mongodb.net/UMS?retryWrites=true&w=majority";

const connectToMongoDb = async () => {
  try {
    // * Connection to MongoDB
    mongoose.connect(dbPassword, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("\x1b[34m", "MONGODB CONNECTED");
  } catch (error) {
    console.log("MONGODB CONNECTION ERROR => ", error);
  }
};

export default connectToMongoDb;
