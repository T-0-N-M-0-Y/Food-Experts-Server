const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000

const chefs = require('./chefs.json')
const foods = require('./foods.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('My Server Lets Go!!!!!!!!')
})

app.get('/foods', (req, res) =>{
    res.send(foods)
})
app.get('/chefs', (req, res) =>{
    res.send(chefs)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})