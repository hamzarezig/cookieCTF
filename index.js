const express = require('express')
const path = require('path');
const cookieParser = require('cookie-parser')
const fs = require('fs')
const app = express()
const port = 80

app.use(cookieParser());

// html
app.get('/', (req, res) => {
	res.cookie('flag2',"X3RoZV9jb29raWVzfQ==", { maxAge: 900000, httpOnly: true });
	res.sendFile("templates/index.html",{root: path.join(__dirname)})
})
app.get('/data.html', (req, res) => {
	res.sendFile("templates/data.html",{root: path.join(__dirname)})
})
app.get('/secret.html', (req, res) => {
	res.sendFile("templates/secret.html",{root: path.join(__dirname)})
})
// robots.txt
app.get('/robots.txt', (req, res) => {
	res.sendFile("templates/robots.txt",{root: path.join(__dirname)})
})
// css
app.get('/style.css', (req, res) => {
	 res.sendFile("templates/style.css",{root: path.join(__dirname)})
})
// img
app.get('/img/cookies1.jpg', (req, res) => {
	res.sendFile("templates/img/cookies1.jpg",{root: path.join(__dirname)})	
});
app.get('/img/cookies2.jpg', (req, res) => {
	res.sendFile("templates/img/cookies2.jpg",{root: path.join(__dirname)})	
});
app.get('/img/cookies3.jpg', (req, res) => {
	res.sendFile("templates/img/cookies3.jpg",{root: path.join(__dirname)})	
});
app.get('/img/cookies4.jpg', (req, res) => {
	res.sendFile("templates/img/cookies4.jpg",{root: path.join(__dirname)})	
});
// mp3
app.get('/NeverGonnaGiveYouUp.mp3', (req, res) => {
	res.sendFile("templates/NeverGonnaGiveYouUp.mp3",{root: path.join(__dirname)})
})
// for 404 errors
app.get('*', function(req, res){
	res.status(404).send(`Error : 404 page page is not found`);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})

