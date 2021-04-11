const express = require('express');
const app = express();
var cors = require('cors');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');



const port = process.env.PORT || 3030;
const logger = require('./config/logger')


app.use(express.json());
app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// parse requests of content-type - application/json
app.use(bodyParser.json());




mongoose.connect('mongodb+srv://Taoufiq:Alsa2018el@cluster0.f15jo.mongodb.net/MarketPlaceDB?retryWrites=true&w=majority' , {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database");    
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  logger.exit();
});















// _______________import router_______________ 
const SuperAdminRoutes = require("./routes/superAdmin.router");
const AdminRoutes = require("./routes/Admin.router");
const SellerRoutes = require("./routes/Seller.router");
const CustomerRoutes = require("./routes/Customer.router");
const ProductRoutes = require("./routes/Product.router");
const ChekoutRoutes = require("./routes/Checkout.router")
const BuyAccountRoutes = require("./routes/BuyAccount.router")

app.use('/superAdmin',SuperAdminRoutes);
app.use('/Admin',AdminRoutes);
app.use('/Seller',SellerRoutes);
app.use('/Customer',CustomerRoutes);
app.use('/Product',ProductRoutes);
app.use('/Checkout', ChekoutRoutes);
app.use('/BuyAccount', BuyAccountRoutes);












module.exports =app;


app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  }) 