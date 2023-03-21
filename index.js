var express = require("express")
var path = require("path")

var app =  express()

var port = 3000;

const usersRoutes = require("./routes/users")
app.use("/users", usersRoutes )

// this is required we want to render the view html index.html as response for route "/renderhtmlFile"

app.set("view engine", "ejs");

//middleWare will make it possible for you to access any request and response object. and also can modify it
const myMiddleWare =(req,res, next)=>{
    console.log("response details", req)
    next()
}
 //to use middle ware use "app.use(miidleware_name)" method
//app.use(myMiddleWare)

app.use(express.static(path.join(__dirname,"public")))

app.get("/", (req,res)=>{
    res.send("Hello! welcome to express basics tutorial");
    res.end()
})

//creating routes with name about

app.get("/about",(req,res)=>{
    res.send("This is about page");
})

app.get("/htmlTemplate",(req,res)=>{
    res.sendFile(path.join(__dirname,"./template/index.html"))
})

app.get("/jsonRes",(req,res)=>{
    res.json({name:"Tanuja"})
})

//app.get with params
app.get("/hi/:name",(req,res)=>{
    res.send(`hi!! ${req.params.name}`)
})
// http://localhost:3000/hi/Tanu

//download file
app.get("/downloadFile", (req,res)=>{
    res.download("index.js")
})

//render html
app.get("/renderhtmlFile", (req,res)=>{
    res.render("index",{text : "This is the text passed from render js fle to views index.ejs file"})
})


app.listen(port, ()=>{
    console.log(`app is running at port no ${port}`)
})



