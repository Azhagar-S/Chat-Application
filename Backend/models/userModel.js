import mongoose  from "mongoose";
import bcrypt from 'bcryptjs'

const userModel = new mongoose.Schema({
    name:{type:String , required:true},
    email:{type:String , required:true},
    password:{type:String , required:true},
    pic:{type:String , required:true , 
        default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"}
    
} , {timestamps:true})

userModel.methods.matchPassword = async function (enterPassword) {
    return await bcrypt.compare(enterPassword , this.password)
}
userModel.pre('save', async function(next) {
  if (this.isModified('password')) {
    
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next(); 
});

const User = mongoose.model('user',userModel)

export default User