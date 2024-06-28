const mongoose =require('mongoose')
const userSchema =new mongoose.Schema(
    {
        email: String,
        password: String,
        nombre: String,
        apellidos: String,
        ci: String,
        celular: String,
        rol: String,
        id_operador: String,
        estado: String
    }
)
module.exports=mongoose.model('User', userSchema)
