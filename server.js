const exp=require("express")
const app=exp();
const path = require("path")
const bodyParser = require("body-parser");
 app.use(bodyParser.json());
const mc=require("mongodb").MongoClient;
const expressErrorHandler=require("express-async-handler")
const databaseUrl="mongodb+srv://madhu:madhu@clusterbackend.szevd.mongodb.net/myfirstdb?retryWrites=true&w=majority"

let databaseObj;
let userCollectionsObj;

mc.connect(databaseUrl,{useNewUrlParser:true,useUnifiedTopology:true},(err,client)=>{
    if(err){
        console.log("error in database connection",err)
    }
    else{
        databaseObj=client.db("delish");
        userCollectionsObj=databaseObj.collection("delishusersdata")
        console.log("Database connection is success")
    }
})


//connecting front end to backend

//importing
const userApi=require("./apis/user-api")
const itemsApi=require("./apis/itemsdata")


app.get('/addtocart',expressErrorHandler(async(req,res,next)=>{
    let abcd=[1,2,3,4,5,6]
    res.send({message:abcd})
   // let userList=await userCollectionsObj.find().toArray()
    
}))




console.log("yoo honey singh from main server ")
app.use("/user",userApi)
app.use("/items",itemsApi)

console.log("yoo honey singh from main server after skip ")


//connect angular app with express server
app.use(exp.static(path.join(__dirname, './dist/delish/')))



app.use((req,res)=>{
    res.send({message:`Path ${req.url} is invalid`})
})

app.use((err,req,res,next)=>{
    res.send({message:`${err.message}`})
})

const port=5000
app.listen(port,()=>console.log(`Server can hear you on ${port}....`))