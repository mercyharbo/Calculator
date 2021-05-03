const express = require("express");
const bPaser = require("body-parser");
const app = express();
const path = require("path");

app.use(bPaser.urlencoded({ extended: true }));

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")));

//set view engine 
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("index");
})

app.post('/', (req, res) => {

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 * num2;

    res.send('The result of the calculation is ' + result);
})


app.listen(3000, () => {
    console.log("Server just got started");
});

