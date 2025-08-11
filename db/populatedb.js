#! /usr/bin/env node

const { Pool } = require("pg");
require("dotenv").config();

const date = new Date().toISOString();

const SQL = `
        CREATE TABLE IF NOT EXISTS messages (
            id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
            username VARCHAR(30),
            message VARCHAR(200),
            added TIMESTAMPTZ
        );

        INSERT INTO messages (username, message, added)
        VALUES ('KVG24', 'Hello World!', '${date}');

        INSERT INTO messages (username, message, added)
        VALUES ('KVG24', 'Can''t believe I created fullstack app with connected SQL Database', '${date}');
    `;

async function main() {
    console.log("seeding...");

    const pool = new Pool({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });

    await pool.query(SQL);
    await pool.end();
    console.log("done");
}

main();
