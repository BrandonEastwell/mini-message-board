const express = require("express");
const path = require("node:path");
const {indexRouter} = require("./routers/indexRouter");
const {newRouter} = require("./routers/newRouter");
const app = express();

const PORT = 5555;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use("/new", newRouter);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send("Internal Server Error " + err.message);
})

app.listen(PORT, () => {
    console.log("Express server listening on port " + `http://localhost:${PORT}`);
})