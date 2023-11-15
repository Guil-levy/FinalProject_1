const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require("knex");
const db = require("./db");
//cookieParser/ jwt / bcrypt

const app = express();
const port = 5000;

// Simulated user data (replace this with a database)
const users = [
  { id: 1, username: 'Guil.Levy', password: '123' },
  { id: 2, username: 'user2', password: 'password2' },
];

// Middleware
app.use(bodyParser.json());
app.use(cors());
//GET
app.get('/users' ,(req,res) => {
  res.json(users)
})
// POST Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simulated authentication logic (replace this with database queries)
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    // login
    res.json({ loggedIn: true, username: user.username });
  } else {
    res.status(401).json({ loggedIn: false, message: 'Invalid credentials' });
  }
});

//LISTEN
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
