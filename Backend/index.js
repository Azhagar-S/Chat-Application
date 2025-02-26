import express from 'express'
import dotenv from 'dotenv'
import chats from './data/data.js'
import cors from 'cors'
import connectDB from './config/dataBase.js'
import userRoutes from './routes/userRoute.js'
import chatRoutes from './routes/chatRoutes.js'

const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("api is running")
})

app.use('/api/user', userRoutes)
app.use('/api/chat', chatRoutes)

app.get('/api/chat:id',(req,res)=>{
    const id = req.params.id

    const Val = chats.find((c)=>c._id  === id)
    res.json(Val)
})





const Port = process.env.PORT || 5000
app.listen(Port,()=>{
    console.log(`server is Started ${Port}`)
    connectDB()
})