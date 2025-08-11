const db = require("../db/queries");

async function renderIndex(req, res) {
    res.render("index", { messages: await db.getAllTableData() });
}

async function renderForm(req, res) {
    res.render("form");
}

async function postMessage(req, res) {
    await db.insertData(req.body.name, req.body.text);
    res.redirect("/");
}

module.exports = { renderIndex, renderForm, postMessage };
