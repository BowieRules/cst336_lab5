const express = require("express");
const app = express();

//routes
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("index");
});

//starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});