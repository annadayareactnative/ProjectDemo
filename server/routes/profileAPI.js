require("dotenv").config();

var express = require("express");
var router = express.Router();

var CryptoJS = require("crypto-js");

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
    app.listen( //port, () => {
      console.log('listening on available port...connected to profileAPI')
    )
})

router.get("/testencdec", (req, res) => {
    var cipherString = enc(req.body.username)
    var decipherString = dec(cipherString)
    res.send({cipherString, decipherString}); 
})

function enc(plainText){
    var b64 = CryptoJS.AES.encrypt(plainText, process.env.ENC_DEC_KEY).toString();
    var e64 = CryptoJS.enc.Base64.parse(b64);
    var eHex = e64.toString(CryptoJS.enc.Hex);
    return eHex;
}

function dec(cipherText){
   var reb64 = CryptoJS.enc.Hex.parse(cipherText);
   var bytes = reb64.toString(CryptoJS.enc.Base64);
   var decrypt = CryptoJS.AES.decrypt(bytes, process.env.ENC_DEC_KEY);
   var plain = decrypt.toString(CryptoJS.enc.Utf8);
   return plain;
}

router.post("/login", (req, res) => {
    const username = req.body.username
    const password = req.body.password

    //res.send("API is working properly");
    db.collection('profiles')
    .find({"credentials.username": username, "credentials.password1": password})
    .toArray(function(err, results) {
        if (results.length > 0) {
            const accessToken = generateAccessToken(username)
            const refreshToken = jwt.sign(username, process.env.REFRESH_TOKEN_SECRET)
            refreshTokens.push(refreshToken)
            const access = 'valid'
            res.json({access, accessToken, refreshToken})
            // jwt.sign({username:req.body.username}, process.env.ACCESS_SECRET_TOKEN , (err, token) => {
            //     if (err) return console.log(err)
            //     res.json({access: 'valid', username, token, results })
            // })
        } else {
            const access = 'invalid'
            res.json({access})   
        }
        // send HTML file populated with tvscollection here
        if (err) return console.log(err)
    })
});

//change this for production //this is just for test
let refreshTokens = [];

router.post('/token', (req,res) => {
    const refreshToken = req.body.token

    if (refreshToken == null) return res.send('no refresh token sent')
    if (!refreshTokens.includes(refreshToken)) return res.send('invalid refresh token')
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, username) => {
        if(err) return res.send(err)
        const accessToken = generateAccessToken(username)
        res.json(accessToken)
    })
});

router.delete('/logout', (req, res) => {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token)
    res.send('Logged out successfully')
})

router.post("/register", (req, res) => {

    db.collection('profiles')
    .insertOne(req.body, (err, result) => {
        if (err) return console.log(err)
        res.send('new profile added to database')
    })

});

router.get("/profile", authenticateToken, (req, res) => {
    res.json(name => name.credentials.username === req.user.username)
});

function generateAccessToken(username) {
    return jwt.sign({username}, process.env.ACCESS_SECRET_TOKEN, {expiresIn: '7d'})
}

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