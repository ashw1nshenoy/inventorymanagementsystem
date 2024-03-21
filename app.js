

//Imports
const express= require('express')
const app=express()
const cors=require('cors')


//files
const db=require('./db/connect')
const routes=require('./routes/routes')

//Predefined Variables
const port=8081


//Middlewares
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ['GET', 'POST', 'PUT', "DELETE"],
    credentials: true
}))

//Routes

app.use('/api/v1',routes)
//Starting the server
const start=async()=>{
        try{
            app.listen(port,()=>{
                console.log("Server Running ..")
            })
        }
        catch(error){
            console.log(error)
        }
}
start()