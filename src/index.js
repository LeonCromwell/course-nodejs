import { engine } from "express-handlebars";
import morgan from "morgan"
import express from "express"
import path from "path"
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")))

//http logger
app.use(morgan("combined"));

// template engine
app.engine("hbs", engine({
  extname: "hbs"
}));
app.set("view engine", "hbs");
app.set("views",  path.join(__dirname, "resources/views"));

// console.log("path: " , path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
