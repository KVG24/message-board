const { Router } = require("express");

const router = Router();

const messages = [
    {
        text: "Hello World!",
        user: "KVG24",
        added: new Date(),
    },
    {
        text: "Wow, I can't believe I made a working full stack app myself. How far have I come in this learning journey. This is very exciting and fun",
        user: "KVG24",
        added: new Date(),
    },
];

router.get("/", (req, res) => {
    res.render("index", { messages: messages });
});
router.get("/new", (req, res) => res.render("form"));
router.post("/new", (req, res) => {
    messages.push({
        text: req.body.text,
        user: req.body.name,
        added: new Date(),
    });
    res.redirect("/");
});

module.exports = router;
