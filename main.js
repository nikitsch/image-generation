import express from "express";
import { engine } from "express-handlebars";

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));

app.get("/", (_, res) => {
  res.render("index")
})

app.listen(3000, () => console.log("Server started..."));