const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000

const chefs = require('./chefs.json')
const foods = require('./foods.json');
const catagories = require('./catagory.json');

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

app.get('/chefs/:id', (req, res) =>{
    const id = req.params.id;
    const selectedChefs = chefs.find(c => c.id == id);
    res.send(selectedChefs);
})

app.get('/catagory', (req, res) =>{
    res.send(catagories)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})