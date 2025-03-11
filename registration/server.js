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

// Registration endpoint
app.post("/register", (req, res) => {
    const { name, email, password, dob } = req.body;
    const query = "INSERT INTO users (name, email, password, dob) VALUES (?, ?, ?, ?)";

    db.query(query, [name, email, password, dob], (err, results) => {
        if (err) {
            console.error(err);
            return res.json({ success: false, message: "Registration failed" });
        }
        res.json({ success: true, message: "User registered successfully!" });
    });
});

app.listen(3000, () => console.log("Server running on port 3000"));
