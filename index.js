const express= require("express")
const {json}= require('express')
const { puppetRouter } = require("./Routes")
const app= express()
const dotenv = require("dotenv")

dotenv.config()

app.use(json())
app.use('/scrap', puppetRouter)


app.get("/test", (req,res)=>{
    res.status(200).send("<h1> Hello Joe !!!! </h1>")
})


app.listen(process.env.PORT, ()=>{
    console.log("Server is running...")
})
