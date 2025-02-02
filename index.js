import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ejsMate from "ejs-mate";

const app = express();
const port = process.env.PORT || 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", { title: "Home", curYear: new Date().getFullYear() });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About", curYear: new Date().getFullYear() });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact",
    curYear: new Date().getFullYear(),
  });
});

app.get("/courses", (req, res) => {
  res.render("courses", {
    title: "Courses",
    curYear: new Date().getFullYear(),
  });
});

app.use((req, res) => {
  res
    .status(404)
    .render("404", {
      title: "404 - Not Found",
      curYear: new Date().getFullYear(),
    });
});

app.listen(port, () => {
  console.log(
    `CIEFAL website running on port ${port} with URL http://127.0.0.1:${port}`
  );
});
