const mongoose =require('mongoose')
const userSchema =new mongoose.Schema(
    {
        email: String,
        password: String,
        nombre: String,
        apellidos: String,
        ci: String,
        celular: Number,
        rol: Number,
        id_operador: Number,
        estado: Number
    }
)
module.exports=mongoose.model('User', userSchema)
