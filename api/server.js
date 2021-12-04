const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');

const app = express();
const analytics = require('./src/routes/analytic')

//Bodyparser Middleware
app.use(express.json());
app.use(cors());

//Db Config
const uri = require('./src/config/keys').mongoURI;

//Connect to Mongo
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log('Connected...'))
.catch((err)=>console.log(err))

//Use Routes
app.use('/api/analytics',analytics)

const port=process.env.port || 5000;

app.listen(port,()=>console.log(`Server stated on port ${port}`))

module.exports = app;
