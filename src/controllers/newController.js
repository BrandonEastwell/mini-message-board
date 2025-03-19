const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../model/messages.json");

function newController(req, res, next) {
    const message = {
        text: req.body.message,
        user: req.body.username,
        added: new Date()
    }

    console.log("New message:", message);

    fs.readFile(filePath, (err, data) => {
        if (err) return next(err);

        const jsonData = JSON.parse(data);
        console.log(jsonData);
        jsonData.push(message);
        const updatedJsonString = JSON.stringify(jsonData);

        fs.writeFile(filePath, updatedJsonString, (err) => {
            if (err) return next(err);
        })
    })

    res.redirect("/");
}

module.exports = { newController };