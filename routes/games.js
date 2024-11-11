// const express = require("express");
const router = express.Router();

// Endpoint to create a new game
router.post("/create", (req, res) => {
  const { startDate, endDate } = req.body;
  const sql = `INSERT INTO games (startDate, endDate, status) VALUES (?, ?, 'in-progress')`;

  db.run(sql, [startDate, endDate], function (err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.json({ gameId: this.lastID });
  });
});

module.exports = router;
