const request = require("supertest");
const app = require("../app");
const db = require("../db"); // Import database connection

describe("API Endpoints", () => {
    afterAll(() => {
        db.end(); // Close database connection after tests
    });

    it("✅ GET /api/feedbacks should return a list of feedbacks", async () => {
        const res = await request(app).get("/api/feedbacks");
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });

    it("✅ POST /api/feedbacks should create a new feedback", async () => {
        const newFeedback = { name: "Test User", email: "test@example.com", message: "Great app!" };
        const res = await request(app).post("/api/feedbacks").send(newFeedback);
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty("message", "Feedback submitted successfully!");
    });
});
