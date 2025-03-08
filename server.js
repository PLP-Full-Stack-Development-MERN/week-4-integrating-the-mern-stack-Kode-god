const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const taskRoutes = require("./routes/taskRoutes"); 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration
const corsOptions = {
  origin: "http://task-manager-kodegod.vercel.app", 
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
};

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/tasks", taskRoutes); 

// Test route
app.get("/", (req, res) => {
  res.send("Task Manager API");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
