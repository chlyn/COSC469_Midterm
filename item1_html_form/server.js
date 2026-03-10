// -------------------------------------------------------------------------------------------------------------------------------
// SERVER SETUP //

// Importing required packages
const express = require("express");                                       
const open = (...args) => import("open").then((m) => m.default(...args)); 
const path = require("path");                                                
const fs = require("fs");                                                 

// Variables
const app = express();                                                    
const PORT = process.env.PORT || 3000;                                    

// Configuring middleware
app.use(express.urlencoded({ extended: true }));                         
app.use(express.static(path.join(__dirname, "public")));            
app.use(express.json());                                        



// -------------------------------------------------------------------------------------------------------------------------------
// LOGIN //

app.post("/api/login", async (req, res) => {

    try {

        // Pulling the submiteed login credentials from the request body
        const { username, password } = req.body;

        // Reading users from JSON file
        const usersPath = path.join(__dirname, "users.json");
        const users = JSON.parse(fs.readFileSync(usersPath, "utf8"));

        // Finding matching user
        const user = users.find(
            (u) => u.username === username && u.password === password
        );

        // If no matching user is found, send error
        if (!user) {
            return res.status(401).json({
                ok: false,
                message: "Invalid username or password"
            });
        }

        // Sending a success response
        return res.json({
            ok: true,
            user: {
                username: user.username,
                password: user.password
            },
        });

    } catch (err) {

        // If unknown error happens, then send default system error
        console.error(err);
        return res.status(500).json({ ok: false, message: "System error, please try again" });
    }
});



// -------------------------------------------------------------------------------------------------------------------------------
// PAGE ROUTES //

// Root route "/" redirects users to login route
app.get("/", (req, res) => {
    return res.redirect("/login");
});

// Login route
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Homepage route
app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});



// -------------------------------------------------------------------------------------------------------------------------------
// START SERVER //

app.listen(PORT, async () => {
    const url = `http://localhost:${PORT}`;     // Creating server URL
    console.log(`Server running on ${url}`);    // Confirming when the server starts in to terminal
    
    // Preventing the server to open browser multiple times
    // Opening browser only when environment variables does not exist
    if (!process.env.__BROWSER_OPENED) {
        process.env.__BROWSER_OPENED = "true";
        await open(url);
    }
});