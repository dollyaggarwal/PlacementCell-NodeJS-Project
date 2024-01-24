const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const userRouter = require('./routes/userRoutes');
const studentRouter = require('./routes/studentRoutes');
const port = process.env.PORT || 7000;

const app = express();
//extract styles and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


app.set('view engine', 'ejs');
app.set('views','./views');

app.use(
	session({
		secret: "hello", // SECRET is stored in the system veriable
		resave: false,
		saveUninitialized: false,
		cookie: { maxAge: 1000 * 60 * 100 },
	})
);

// for authentication
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use(express.urlencoded({ extended: true}));
app.use(express.static('./assets'));

app.use('/', userRouter);
app.get('/', (req, res)=>{
	return res.send("Welcome to my Placement Cell");
})

app.listen(port, (error)=>{
    if (error) {
		console.log(`Error in connecting to server: ${error}`);
		return;
	}
	console.log(`Server running on port: ${port}`);
});
