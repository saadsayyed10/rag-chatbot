import express from "express";
import cors from "cors";
import env from "./config/env.js";

const app = express();
const PORT = env.PORT;

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: 200, health: "OK" });
});

app.listen(PORT, () => {
  console.log(`Server running on PORT:${PORT}`);
});
