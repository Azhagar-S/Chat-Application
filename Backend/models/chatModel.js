import mongoose from 'mongoose'

const chatModel = new mongoose.Schema({
    chatName:{type:String , trim:true},
    groupChat:{type:Boolean},
    user:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }],
    latestMessage:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"message"
    },
    groupAdmin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
},
    {timestamps}
)

module.exports = mongoose.model("chat" , chatModel)