const dotenv = require('dotenv');
const express = require('express');
dotenv.config();

const session = require('express-session');

const PORT = process.env.PORT || 1234;
const router = require('./app/router');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'app/views');

// app.use((request,response,next) =>{
// 	console.log(`[${new Date().toISOString()} ${request.ip}] ${request.path}`)
//   next();
// });

//! secret à changer pour chaque Projet
app.use(session({
    secret: process.env.SECRET, //! A modifier dans .env
    resave : true, 
    saveUninitialized: true,
		cookie: {
		    // secure: false,
		    // maxAge: (1000 * 60 * 60) // Une heure
		}
}));

app.use(express.static('public'));

app.use(router);

app.listen(PORT, () => {
    console.log(`✅ Server listening on http://localhost:${PORT}`);
});
