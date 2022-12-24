
const exp=require("express")
const app=exp();
const path = require("path")
const bodyParser = require("body-parser");
 app.use(bodyParser.json());


//connecting front end to backend

//importing
const userApi=require("./apis/user-api")
const itemsApi=require("./apis/itemsdata")


app.use("/user",userApi)
app.use("/items",itemsApi)


//connect angular app with express server
app.use(exp.static(path.join(__dirname, './dist/delish/')))


app.use((req,res)=>{
    console.log("wrong")
    res.send({message:`Path ${req.url} is invalid`})
})

app.use((err,req,res,next)=>{
    res.send({message:`${err.message}`})
})

const port=5000
app.listen(port,()=>console.log(`Server can hear you on ${port}....`))
