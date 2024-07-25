const mongoose =require('mongoose')
const crypto = require('crypto'); 
const userSchema =new mongoose.Schema(
    {
        email: String,
        password: {
            type: String,
            default: "f19854b4",
            minlength: 6
        },
        //password: String,
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
);
// Middleware para generar una contraseña aleatoria si id_operador es diferente a null
userSchema.pre('save', function(next) {
    if (this.isModified('id_operador') && this.id_operador !== null) {
        // Generar una contraseña aleatoria
        const randomPassword = crypto.randomBytes(8).toString('hex');
        this.password = randomPassword;
    }
    next();
});

module.exports = mongoose.model('User', userSchema);

