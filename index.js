import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const app = express();
const PORT = 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(__dirname, "public");
});

app.listen(PORT, () => {
  console.log(`CIEFAL website running on localhost:${PORT}`);
});
