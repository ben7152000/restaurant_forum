const express = require('express')
const handlebars = require('express-handlebars')
const app = express()

const PORT = 3000

app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')

require('./routes')(app)

app.listen(PORT, () => {
  console.log(`The server is running on localhost:${PORT}`)
})

module.exports = app
