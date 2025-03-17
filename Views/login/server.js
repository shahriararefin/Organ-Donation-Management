require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "yourpassword",
    database: "organ_donation"
});

db.connect(err => {
    if (err) throw err;
    console.log("MySQL Connected...");
});

// Login endpoint
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const query = "SELECT * FROM users WHERE username = ? AND password = ?";
    
    db.query(query, [username, password], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }
    });
});

app.listen(3000, () => console.log("Server running on port 3000"));
