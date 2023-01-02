//prakash
const express = require('express')
const app = express()
const  mongoose  = require('mongoose')

const route = require('./routes/route.js')


app.use(express.json())
mongoose.set('strictQuery', true)

mongoose.connect('mongodb+srv://prakashurkude:prakash1998@cluster0.nuhssqs.mongodb.net/vaccinationApp', { useNewUrlParser : true })
.then( () => console.log("MongoDB is connected"))
.catch( (err) => console.log(err.message))

app.use('/', route)

app.listen(3000, function(){
    console.log("Express app is running on port 3000")
})
