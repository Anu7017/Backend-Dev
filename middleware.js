const express = require("express");

const app = express();
app.use(express.json());

// Data Sanitization Middleware
app.use((req, res, next) => {
    const sanitize = (obj) => {
        for (let key in obj) {
            if (typeof obj[key] === "string") {
                obj[key] = obj[key]
                    .replace(/<script.*?>.*?<\/script>/gi, "") // remove script tags
                    .replace(/['";]/g, "") // remove SQL special chars
                    .replace(/(--|\b(SELECT|INSERT|DELETE|UPDATE|DROP|OR|AND)\b)/gi, "");
            }
        }
    };

    sanitize(req.body);
    sanitize(req.query);
    sanitize(req.params);

    next();
});

// Test Route
app.post("/submit", (req, res) => {
    res.json({
        message: "Sanitized data received",
        data: req.body
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});