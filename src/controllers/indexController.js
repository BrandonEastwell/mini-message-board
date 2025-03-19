const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

async function indexController(req, res, next) {
    res.render("index", { title: "mini messageboard", messages: messages })
}

module.exports = { indexController }