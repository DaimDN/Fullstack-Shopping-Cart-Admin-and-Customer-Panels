const express = require('express')
const app = express();
const config = require('config');
const cors = require('cors');
const ConnectDB = require('./config/db')
const path = require('path')


//@ Connecting to the Database
ConnectDB();


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors());

app.use('/products', require('./routes/products/Product'))
app.use('/admin/api', require('./routes/admin/admin'))
app.use('/customers/api', require('./routes/customer/Customer'))
app.use('/shop/api', require('./routes/shop/shop.routes') )

app.use(express.static('adminpanel/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'adminpanel', 'build', 'index.html'));
});


module.exports = app;


