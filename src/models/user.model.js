const mongoose =require('mongoose')
const userSchema =new mongoose.Schema(
    {
        email: String,
        password: String,
        nombre: String,
        apellidos: String,
        ci: String,
        celular: String
    }
)
module.exports=mongoose.model('User', userSchema)
