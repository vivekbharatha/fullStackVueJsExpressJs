const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('tiny'))

app.get('/status', (req, res) => {
  return res.send({
    message: 'Hehe!'
  })
})

app.listen(process.env.PORT || 8081)
