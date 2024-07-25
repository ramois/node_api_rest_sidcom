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
        //id_operador: Number,
        id_operador: {
            type: Number,
            default: null // Hacerlo opcional con un valor predeterminado de null
        },
        //estado: Number
        estado: {
            type: Number,
            default: 0 // Valor predeterminado para el estado
        }
    }
)
module.exports=mongoose.model('User', userSchema)
