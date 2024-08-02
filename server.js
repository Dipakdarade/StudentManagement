const express = require('express')
const { default: mongoose } = require('mongoose')
const path = require('path')
const ejsMate = require('ejs-mate');
const bodyParser = require('body-parser');
const PORT = 4444;
const app = express();
mongoose.connect('mongodb://localhost:27017/studentDB')
.then(()=>{console.log('DB connected!')})
.catch((error)=>{console.log(error)});
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine','ejs')
app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.get('/',(req,res)=>{
    res.send('Working Started on PORT: 4444');
})
const routes = require('./routes/studentRoutes');
app.use(routes);
app.listen(PORT,(req,res)=>{
  console.log(`Server Started Running on PORT:${PORT}`);
    });

