const mongoose = require("mongoose");

const connectUsingMongoose = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://PlacementCell:thdgSwFp5i3M5rKr@cluster0.jyopjgi.mongodb.net/?retryWrites=true&w=majority",
      {
        dbName: "SocialMedia",
      }
    );
    console.log("Mongodb connected using mongoose");
  } catch (err) {
    console.log("Error while connecting to db");
  }
};

module.exports = { connectUsingMongoose, mongoose };
