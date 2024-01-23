import express from "express";
import db from "./config/mongoose.js"
const port = process.env.PORT || 6000;

const app = express();
app.use(express.urlencoded({ extended: true}));
app.use(express.static('./assets'));

app.set('view engine', 'ejs');
app.set('views','./views');

app.listen(port, (error)=>{
    if (error) {
		console.log(`Error in connecting to server: ${error}`);
		return;
	}
	console.log(`Server running on port: ${port}`);
});
