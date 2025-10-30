// index.js
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Root route for testing
app.get("/", (req, res) => {
  res.send("Subbiem8 server is live!");
});

// Endpoint for ServiceM8 "Send Update" button
app.post("/servicem8/job-update", (req, res) => {
  console.log("Job update received:", req.body);
  
  // TODO: Add your Subbiem8 logic here
  // e.g., send client email, update database, etc.
  
  res.json({ success: true, message: "Job update processed." });
});

// Endpoint for ServiceM8 webhook on job completion
app.post("/servicem8/webhook/job-completed", (req, res) => {
  console.log("Job completed webhook received:", req.body);
  
  // TODO: Add logic for what should happen when a job is completed
  
  res.sendStatus(200);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Subbiem8 server running on port ${PORT}`);
});
