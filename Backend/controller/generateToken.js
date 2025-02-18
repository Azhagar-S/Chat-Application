import jwt from 'jsonwebtoken'

const generateToken = (id)=>{
    return jwt.sign({id} , process.env.SECREAT_KEY , {
        expiresIn:'30d'
    })
}

export default generateToken