import express from "express";
import compression from "compression";
import page from "./routes/page";
import report from "./routes/report";
import path from "path";

const app = express();

app.use(compression());
app.use(express.static("public"));
app.set("views", path.join(__dirname, "templates"));
app.set("view engine", "hbs");

app.use("/page", page);
app.use("/report", report);

const port = process.env.PORT || 3030;
app.listen(port, function listenHandler() {
    console.info(`Running on ${port}...`);
});