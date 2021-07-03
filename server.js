const exp=require("express")
const app=exp();
const path = require("path")

//importing
const userApi=require("./apis/user-api")


app.use("/user",userApi)


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