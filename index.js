const express = require("express");
const app = express();

app.get("/",(req,res) => {
	res.send("This is my first VCC assignment");
});

app.listen(3000,"0.0.0.0",() => {
	console.log("Microservice running on port 3000");
});