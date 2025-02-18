import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

export const protect = async(req,res,next) =>{
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            const token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token,process.env.SECREAT_KEY)
            req.user = await User.findById(decoded.id).select("-password")
            next()
        } catch (error) {
            res.status(401)
            throw new Error("Not Authorized , token failed");
            
        }
    }
}