const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const app = express();
const port = process.env.PORT || 4000;

const gameRoutes = require("./routes/game");

// Connect to SQLite database
const db = new sqlite3.Database("./db.sqlite", (err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to SQLite database");
  }
});

// Middleware
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("Word Assassins API is running!");
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use("/api/game", gameRoutes);
