import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;
const ALLOW_ORIGIN = process.env.ALLOW_ORIGIN || "http://localhost:5173";

app.use(cors({ origin: ALLOW_ORIGIN }));
app.use(express.json());
app.use(morgan("dev"));

app.get("/api/health", (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

// Example: simple model
const visitorSchema = new mongoose.Schema(
  { kind: String, meta: Object },
  { timestamps: true }
);
const Visitor = mongoose.model("Visitor", visitorSchema);

app.post("/api/visit", async (req, res) => {
  try {
    const doc = await Visitor.create({ kind: "visit", meta: req.body || {} });
    res.json({ ok: true, id: doc._id });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, error: "Failed to save visit" });
  }
});

async function start() {
  try {
    if (!MONGODB_URI) {
      console.warn("MONGODB_URI not set. Server will run without DB connection.");
    } else {
      await mongoose.connect(MONGODB_URI);
      console.log("Connected to MongoDB");
    }
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  } catch (err) {
    console.error("Failed to start:", err);
    process.exit(1);
  }
}

start();
