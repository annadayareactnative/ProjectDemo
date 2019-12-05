//##### This should be an authServer for creating webtoken when logged in #####//
//not yet used //problem with starting a separate port for this route

require("dotenv").config();

var express = require("express");
var router = express.Router();

var jwt = require('jsonwebtoken');

const bodyParser= require('body-parser'); //add this line once body parser was installed
const MongoClient = require('mongodb').MongoClient //mongodb connect method 1/2
const app = express();

//var port = process.env.PORT || '9000';
var url = 'mongodb+srv://testadmin:testadmin@cluster0-u2pmb.mongodb.net/test?retryWrites=true&w=majority';

var db
MongoClient.connect(url, (err, client) => {
    if (err) return console.log(err)
    db = client.db('tvsdb') // whatever your database name is
    
    // app.listen(9900);
    app.listen( 9900, () => {
      console.log('listening on available port...connected to authServer')
    })
})

router.get("/login", (req, res) => {
    const username = req.body.username
    const password = req.body.password

    //res.send("API is working properly");
    db.collection('profiles').find({"credentials.username": username, "credentials.password1": password}).toArray(function(err, results) {
        console.log(results.length)
        if (results.length > 0) {
            jwt.sign({username:req.body.username}, process.env.ACCESS_SECRET_TOKEN , (err, token) => {
                if (err) return console.log(err)
                res.json({access: 'valid', username, token })
            })
        } else {
            res.send({access: 'invalid'})   
        }
        // send HTML file populated with tvscollection here
        if (err) return console.log(err)
    })
});

router.get("/profile", authenticateToken, (req, res) => {
    res.json(name => name.credentials.username === req.user.username)
})

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_SECRET_TOKEN, (err, username) => {
        if (err) return console.log(err)
        req.username = username
        next()
    })
}

module.exports = router;