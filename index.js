import express from "express";
import { create } from "express-handlebars";
// import { dirname } from "path";
// import { fileURLToPath } from "url";

// Если не работает __dirname

// const __fileName = fileURLToPath(import.meta.url);
// const __dirname = dirname(__fileName);

const app = express();

const hbs = create({
  defaultLayout: "main",
  extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views");

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

//About page
app.get("/about", (req, res) => {
  res.render("about");
});

const PORT = process.env.PORT || 4100;
app.listen(4100, () => console.log(`Server is running on port ${PORT}`));
