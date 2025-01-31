import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ejsMate from "ejs-mate";

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set up EJS with ejs-mate
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from the 'public' directory
// Update static files middleware
app.use(express.static(path.join(__dirname, "dist")));
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

app.listen(port, () => {
  console.log(
    `CIEFAL website running on port ${port} with URL http://127.0.0.1:${port}`
  );
});
