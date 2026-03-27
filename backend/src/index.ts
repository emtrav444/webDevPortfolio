/* IMPORTS */
import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/api/test", (req, res) => {
  console.log("✅ api integration is functional!");
  res.json({ message: "backend is functional!" });
});

app.listen(PORT, () => {
  console.log(`✅ backend is running on ${PORT}!`);
});
