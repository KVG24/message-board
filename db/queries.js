const pool = require("./pool");

async function getAllTableData() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

async function insertData(username, message) {
    await pool.query(
        "INSERT INTO messages (username, message, added) VALUES ($1, $2, $3)",
        [username, message, new Date().toISOString()]
    );
}

module.exports = { getAllTableData, insertData };
