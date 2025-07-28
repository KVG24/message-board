const { Router } = require("express");

const indexRouter = Router();

const messages = [
    {
        text: "Hi there!",
        user: "Vadym",
        added: new Date(),
    },
    {
        text: "Hello World!",
        user: "Vadym",
        added: new Date(),
    },
];

indexRouter.get("/", (req, res) => {
    res.render("index", { messages: messages });
});
indexRouter.get("/new", (req, res) => res.render("form"));

module.exports = indexRouter;
