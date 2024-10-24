require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const useRoutes = require("./Routers/useRoutes"); // Import the route file

// Connect to MongoDB
const mongoString = process.env.DATABASE_URL;
mongoose
  .connect(mongoString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000,
    socketTimeoutMS: 45000,
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error.message);
  });

app.use(express.json()); // Middleware to parse JSON

// Use the routes from the separate file
app.use("/", useRoutes);

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
