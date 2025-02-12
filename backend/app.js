const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const rateLimit = require("express-rate-limit");
const winston = require("winston");
const feedbackRoutes = require("./routes/feedbackRoutes");
require("dotenv").config();

const app = express();

// ✅ Security Enhancements
app.use(helmet()); // Secure HTTP headers
app.use(cors()); // Enable CORS for frontend communication
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(compression()); // Compress API responses for faster performance

// ✅ Rate Limiting (Prevent brute-force attacks)
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Max 100 requests per 15 minutes
    message: "Too many requests, please try again later."
});
app.use(limiter);

// ✅ Logging Setup (Using Winston)
const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: "logs/error.log", level: "error" }),
        new winston.transports.Console(), // Log to console for development
    ],
});

// ✅ Log Each Request
app.use((req, res, next) => {
    logger.info(`Request made to: ${req.method} ${req.url}`);
    next();
});

// ✅ API Routes
app.use("/api", feedbackRoutes);

// ✅ Error Handling Middleware
app.use((err, req, res, next) => {
    logger.error(err.message);
    res.status(500).json({ message: "Internal Server Error" });
});

// ✅ Start Server
const PORT = process.env.PORT || 3000;

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`✅ Server is running on http://localhost:${PORT}`);
    });
}

// ✅ Export app for Testing
module.exports = app;
