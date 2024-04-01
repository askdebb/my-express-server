const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    // console.log(req);
    res.send("<h1>Hello Chris!</h1>");
});

app.get("/contact", function(req, res){
    res.send("contact me at: cd.jobs.w@gmail.com");
});

app.get("/about", function(req, res){
    res.send("This is christopher Wiafe Debrah, a Junior Web Developer");
});

app.get("/services", function(req, res){
    res.send("We create digital solutions to potential clients across the globe");
});

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
    
   const weight = parseFloat(req.body.weight);
   let height = parseFloat(req.body.height);
    height*=height;
    const result = weight / height;
    res.send(`The result is ${result} kg/m squared.`);

});


app.listen(3000, function(){
    console.log("Server started on port 3000");
});