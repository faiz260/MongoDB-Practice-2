const express = require('express')
const app = express()
const api = require('./api')

app.use(express.json())

app.get('/', api.home)

app.post('/login', api.login)

app.signup('/signup', api.signup)

module.exports =  ({port, cb})=>{
    app.listen(port, cb) 
}