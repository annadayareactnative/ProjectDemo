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
      console.log('listening on available port...connected to hospitalsAPI')
    )
})

router.get("/", function(req, res, next) {
    //res.send("API is working properly");
    db.collection('hospitals').find().toArray(function(err, results) {
        console.log(results)
        // send HTML file populated with tvscollection here
        if (err) return console.log(err)
        res.json({hospdata: results})
    })
});

module.exports = router;