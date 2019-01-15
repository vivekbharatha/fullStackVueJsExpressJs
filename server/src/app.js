const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('tiny'))

app.post('/register', (req, res) => {
  return res.send({
    message: `Your ${req.body.email} has been registered!`
  })
})

app.listen(process.env.PORT || 8081)
