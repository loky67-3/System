const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();


//database conection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database connectada'))
.catch((err) => console.log('DataBase not connected', err))


//middleware
app.use(express.json());



app.use('/', require('./routes/authRoutes'))

const port = 8000;
app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}`))
