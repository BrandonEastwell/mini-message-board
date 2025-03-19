const express = require("express");
const path = require("node:path");
const {indexRouter} = require("./routers/indexRouter");
const app = express();

const PORT = 5555;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
//app.use("/new", );


app.listen(PORT, () => {
    console.log("Express server listening on port " + `http://localhost:${PORT}`);
})