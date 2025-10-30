// index.js
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Basic test route
app.get("/", (req, res) => {
  res.send("Subbiem8 is online!");
});

// Example endpoint for ServiceM8 button action
app.post("/servicem8/job-update", (req, res) => {
  console.log("Job update received:", req.body);
  res.json({ success: true, message: "Job update processed." });
});

// Example webhook endpoint
app.post("/servicem8/webhook/job-completed", (req, res) => {
  console.log("Job completed webhook:", req.body);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Subbiem8 server running on port ${PORT}`);
});
