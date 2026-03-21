const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// database connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database conectada'))
.catch((err) => console.log('Database not connected', err));

// middleware
app.use(express.json());

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://ventas-runing.onrender.com"
  ],
  credentials: true
}));

// routes
app.use('/', require('./routes/authRoutes'));

// puerto para Render
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}`));