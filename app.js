const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const path = require("node:path");

// Parse form data
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

// EJS handling
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Date formatting function
app.locals.formatDate = function (date) {
    return date.toLocaleDateString("en-GB", {
        minute: "2-digit",
        hour: "2-digit",
        hour12: false,
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
};

// Static assets handling
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// Error middleware function
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send(err.message);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
});
