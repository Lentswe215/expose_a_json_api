const express = require('express')
const routes = require('./api')
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
app.use('/api',routes);

let server = app.listen(process.env.PORT || 4000, ()=>{
let port = server.address().port
let host = server.address().address
console.log(`Listening to ${host}:${port}`)
})
