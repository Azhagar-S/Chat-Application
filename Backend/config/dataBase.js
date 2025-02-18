import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
         const conn = await mongoose.connect(process.env.DATA_BASE)
        console.log("DataBase connected")
    } catch (error) {
        console.log("this will be error:",error)
    }    
}

export default connectDB