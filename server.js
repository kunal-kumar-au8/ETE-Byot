const express = require('express');
const conncetDB = require('./config/db')
const app = express();

// Connect Database
conncetDB();

// Init Middleware
app.use(express.json())

app.get('/',(req, res)=> res.send(''));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`server started on port ${PORT}`));
  