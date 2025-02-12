const express = require("express");
const db = require("../db");

const router = express.Router();

// ✅ Create feedback
router.post("/feedbacks", (req, res) => {
    const { name, email, message } = req.body;
    const sql = "INSERT INTO feedbacks (name, email, message) VALUES (?, ?, ?)";
    db.query(sql, [name, email, message], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: "Feedback submitted successfully!" });
    });
});

// ✅ Get all feedbacks
router.get("/feedbacks", (req, res) => {
    db.query("SELECT * FROM feedbacks", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// ✅ Update feedback
router.put("/feedbacks/:id", (req, res) => {
    const { name, email, message } = req.body;
    const sql = "UPDATE feedbacks SET name=?, email=?, message=? WHERE id=?";
    db.query(sql, [name, email, message, req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Feedback updated successfully!" });
    });
});

// ✅ Delete feedback
router.delete("/feedbacks/:id", (req, res) => {
    db.query("DELETE FROM feedbacks WHERE id=?", [req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Feedback deleted successfully!" });
    });
});

module.exports = router;
