const mongoose =require('mongoose')
const userSchema =new mongoose.Schema(
    {

        fecha_emision: Date,
        hora_emision: String,
        ubi_geografica: String,
        lugar_verificacion: String,
        id_operador: String,
        responsable: String,
        lotes: String,
        tipo_muestra: String,
        presentacion: String,        
        sacos: String,
        camiones: String,
        peso_neto: String,
        peso_parcial: String,      
        minerales : [
            { nombre : String, ley :  String, unidad: String },
        ],
        id_municipio: String,
        senarecom: String,
        tipo_agranel: String,
        tipo_emsacado: String,
        tipo_lingotes: String,
        tipo_sal: String,
        tipo_otr: String,
        observaciones: String,
        estado: String
    }
)
module.exports=mongoose.model('Muestra', userSchema)
