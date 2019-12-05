var express = require("express");
var router = express.Router();

const bodyParser= require('body-parser'); //add this line once body parser was installed
const MongoClient = require('mongodb').MongoClient //mongodb connect method 1/2
const app = express();

//var port = process.env.PORT || '9000';
var url = 'mongodb+srv://testadmin:testadmin@cluster0-u2pmb.mongodb.net/test?retryWrites=true&w=majority';

var db
MongoClient.connect(url, (err, client) => {
    if (err) return console.log(err)
    db = client.db('tvsdb') // whatever your database name is
    app.listen( //port, () => {
      console.log('listening on available port')
    )
})

//install a body parser to read data from <form> elements
app.use(bodyParser.urlencoded({extended: true}))

//read json data
app.use(bodyParser.json())

router.get("/", function(req, res) {

    console.log("you are in testDB");

    db.collection('transactions').find().toArray(function(err, results) {
        console.log(results)
        // send HTML file populated with tvscollection here
        if (err) return console.log(err)
        // renders index.ejs
        //res.render('index.ejs', {quotes: results})
    })
    
})

router.post('/', (req, res) => {
    console.log('Request have been received.')
    // console.log(req.body)

    //this CREATES
    db.collection('transactions')
    .insertOne(req.body, (err, result) => {
        if (err) return console.log(err)
    
        console.log('saved to database')
        //res.redirect('/')
    })
})

module.exports = router;