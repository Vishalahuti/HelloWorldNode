const express = require('express');
const users = require("./MOCK_DATA.json")
const app = express();
const PORT = 3000;

// Middleware to handle requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route for Home
app.get('/users', (req, res) => {
    const userList = users.map(user => `<li>${user.first_name}</li>`).join(''); // Adjust according to your user object structure
    res.send(`<h1>Welcome to the Home Page</h1><p>Your users list is as given below:</p><ul>${userList}</ul></p>`);
});

// Route for About
app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1><p>This is the about page.</p>');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
