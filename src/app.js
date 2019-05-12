let express = require('express')
let app = express()
let asgnRoute = require('./routes/asgn-router')
let bodyParser = require('body-parser');

var dotenv = require('dotenv');
dotenv.config();


var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true});




app.use((req, res, next) =>{
    console.log(`${new Date().toString()} ===>${req.originalUrl}`, req.body)
    next();
})
app.use(bodyParser.json())
app.use(asgnRoute)
app.use('/asgn-api',asgnRoute)
app.use(express.static('public'))

app.use((req, res, next) =>{
    res.status(404).send('Page not found, sorry!')
})


const PORT = process.env.PORT ||3000
app.listen(PORT, () => console.info(`Server has started on ${PORT}`))