const express= require('express');
const app = express();
const PORT_NUM = 3000;

if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const ejsLayouts = require('express-ejs-layouts');
const indexRouter = require('./routes/index');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');

app.use(express.urlencoded({ extended: true }));
app.use(ejsLayouts);
app.use(methodOverride('_method'));
app.use('/', indexRouter);
app.use(express.static('public'));

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
});

const db = mongoose.connection;
db.on('error', (error) => {
    console.log('error connecting to the database');
});
db.once('open', () => {
    console.log('successfully connected to the database');
});

app.listen(process.env.PORT || PORT_NUM, (req, res) => {
    console.log('server is running');
});