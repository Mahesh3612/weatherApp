const express = require("express")
const app = express();
const path = require("path")
const hbs = require("hbs")

// here we write process.env.PORT it will automatically run on any port if 8000 port is busy
const port = process.env.PORT || 8000

const views = (path.join(__dirname,"../templates/views"))
const partialPath = (path.join(__dirname,"../templates/partials"))

// express run from top to bottom and we are using here "app.use(express.static(staticPath))" means express will come from top and whenever it look this method it will send response to client side
// here we are using "express.static" that meand we are telling to express that we have to show static page now
// app.use(express.static(staticPath))

app.use(express.static('public'))
hbs.registerPartials(partialPath)

app.set("views",views)
app.set("view engine","hbs")


// Routing

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/weather",(req,res)=>{
    res.render("weather")
})

app.get("*",(req,res)=>{
    res.render("error")
})

app.listen(port,"127.0.0.1",()=>{
    console.log("listning on port 8000")
})