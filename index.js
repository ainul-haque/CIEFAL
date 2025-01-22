import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ejsMate from "ejs-mate";

const app = express();
const PORT = process.env.PORT || 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set up EJS with ejs-mate
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// 404 route
app.use((req, res) => {
  res.status(404).render("404", { title: "404 - Not Found" });
});

app.listen(PORT, () => {
  console.log(`CIEFAL website running on port ${PORT}`);
});
