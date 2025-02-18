import User from '../models/userModel.js'
import generateToken  from './generateToken.js'

export const registerUser = async(req , res)=>{
    try {
        const {name , email , password , pic} = req.body

        if(!name || !email || !password ){
            res.status(400)
            throw new error('please Enter the All fileds')
        }

        const userexist = await User.findOne({email})
        if(userexist){
            res.status(400).json({message:"you're already exists"})
        }

        const user = await User.create({
            name,
            email,
            password,
            pic
        })

        if(user){
            res.status(201).json({
                name:user.name,
                email:user.email,
                password:user.password,
                pic:user.pic,
                token:generateToken(user._id)
            })
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const authUser = async(req,res)=>{
    try {
        const {email , password} = req.body

        const user = await User.findOne({email})
        if(user && (await user.matchPassword(password))){
            res.json({
                name:user.name,
                email:user.email,
                pic:user.pic,
                token:generateToken(user._id)
            })
        }else{
            res.status(400).json({message:"Password Thappu Nanba"})          
        }
        if(!user){
            res.status(400).json({message:"ethuvum illai"})
        }

    } catch (error) {
         res.status(401).json({message:"Invaild Password"})       
    }
}



export const allUser = async(req,res)=>{
    try {
        const keyword = req.query.search ?
        {$or:[
            {name:{$regex: req.query.search , $options:'i'}},
            {email:{$regex: req.query.search , $options:'i'}}
        ]} : {}

        const Val = await User.find().find({_id:req.user._id})
        res.send(Val)
        console.log(req.user._id)
    } catch (error) {
        console.log(error)
    }
}





// export default {
//     registerUser,
//     authUser,
// }