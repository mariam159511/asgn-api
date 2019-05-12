let express = require('express')
let app = express()
const PORT = process.env.PORT ||3000

let bodyParser = require('body-parser');

var dotenv = require('dotenv');
dotenv.config();

let asgnRoute = require('./routes/asgn-router')

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true});




app.use((req, res, next) =>{
    console.log(`${new Date().toString()} ===>${req.originalUrl}`)
    next();
})
app.use(bodyParser.json())
app.use(asgnRoute)
app.use('/asgn-api',asgnRoute)
app.use(express.static('public'))

app.use((req, res, next) =>{
    res.status(404).send('Page not found, sorry!')
})



app.listen(PORT, ()=> {
    console.log(`Server has started on port ${PORT}`);
});