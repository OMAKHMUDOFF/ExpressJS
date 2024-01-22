import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

// Если не работает __dirname

const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

const app = express();

// Home page
app.get("/", (req, res) => {
  res.status(200);
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

//About page
app.get("/about", (req, res) => {
  res.status(200);
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

const PORT = process.env.PORT || 4100;
app.listen(4100, () => console.log(`Server is running on port ${PORT}`));
