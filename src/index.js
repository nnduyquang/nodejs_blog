const path=require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'public')))

//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', handlebars.engine({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');
//Template engine-config path folder resources
app.set('views',path.join(__dirname,'resources/views'))

app.get('/', (req, res) => {
  res.render('home')
})
app.get('/tin-tuc', (req, res) => {
  res.render('tin-tuc')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})