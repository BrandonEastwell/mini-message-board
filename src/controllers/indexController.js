const messages = require("../model/messages.json");

async function indexController(req, res, next) {
    res.render("index", { title: "mini messageboard", messages: messages })
}

module.exports = { indexController }