const mongoose =require('mongoose')
const userSchema =new mongoose.Schema(
    {

           razon_social: {
            type: String,
            required: true
          },
          nit: {
            type: Number,
            required: true
          },
          nim_niar: {
            type: Number,
            required: true
          },
          nro_nim: {
            type: String,
            required: true
          },
          fecha_exp_nim: {
            type: Date,
            required: true
          },
          tipo_operador: {
            type: Number,
            required: true
          },
          nro_personeria: {
            type: String,
            default: null
          },
          nro_matricula_seprec: {
            type: String,
            default: null
          },
          fecha_exp_seprec: {
            type: String,
            default: null
          },
          tipo_doc_creacion: {
            type: Number,
            default: null
          },
          doc_creacion: {
            type: String,
            default: null
          },
          dl_departamento: {
            type: Number,
            required: true
          },
          dl_municipio: {
            type: Number,
            required: true
          },
          dl_direccion: {
            type: String,
            required: true
          },
          dl_ubicacion: {
            type: String,
            required: true
          },
          correo_inst: {
            type: String,
            default: null
          },
          tel_fijo: {
            type: String,
            default: null
          },
          celular: {
            type: Number,
            required: true
          },
          celular_2: {
            type: Number,
            default: null
          },
          act_exploracion: {
            type: Number,
            default: 0
          },
          act_comer_interna: {
            type: Number,
            default: 0
          },
          act_comer_externa: {
            type: Number,
            default: 0
          },
          act_industrializacion: {
            type: Number,
            default: 0
          },
          act_tras_colas: {
            type: Number,
            default: 0
          },
          act_explotacion: {
            type: Number,
            default: 0
          },
          act_ben_concentracion: {
            type: Number,
            default: 0
          },
          act_refinacion: {
            type: Number,
            default: 0
          },
          act_fundicion: {
            type: Number,
            default: 0
          },
          tipo_explotacion: {
            type: Number,
            default: null
          },
          denominacion_area: {
            type: String,
            default: null
          },
          nro_codigo_unico: {
            type: String,
            default: null
          },
          nro_cuadricula: {
            type: String,
            default: null
          },
          municipio_origen: {
            type: String,
            default: null
          },
          nro_ruex: {
            type: String,
            default: null
          },
          verif_cert_liberacion: {
            type: Number,
            default: null
          },
          nro_res_ministerial: {
            type: Number,
            default: null
          },
          nombre_resp_for101: {
            type: String,
            default: null
          },
          ci_resp_for101: {
            type: String,
            default: null
          },
          celular_resp_for101: {
            type: Number,
            default: null
          },
          correo_resp_for101: {
            type: String,
            default: null
          },
          nombre_resp_tmuestra: {
            type: String,
            default: null
          },
          ci_resp_tmuestra: {
            type: String,
            default: null
          },
          celular_resp_tmuestra: {
            type: Number,
            default: null
          },
          correo_resp_tmuestra: {
            type: String,
            default: null
          }
        
        /*razon_social: String,
        nit: String,
        nim_niar: String,
        nro_nim: String,
        tipo_operador: String,
        nro_personeria: String,
        nro_matricula_seprec: String,
        fecha_exp_seprec: String,
        tipo_doc_creacion: String,
        doc_creacion: String,
        departamento: String,
        municipio: String,
        direccion: String,
        ubicacion: String,
        correo_inst: String,
        tel_fijo: String,
        celular: String,
        celular_2: String,
        act_exploracion: String,
        act_comer_interna: String,
        act_comer_externa: String,
        act_industrializacion: String,
        act_tras_colas: String,
        act_explotacion: String,
        act_refinacion: String,
        act_fundicion: String,
        tipo_explotacion: String,
        denominacion_area: String,
        nro_codigo_unico: String,
        nro_cuadricula: String,
        municipio_origen: String,
        nro_ruex: String,
        verif_cert_liberacion: String,
        nro_res_ministerial: String,
        nombre_resp_for101: String,
        ci_resp_for101: String,
        celular_resp_for101: String,
        correo_resp_for101: String,
        nombre_resp_tmuestra: String,
        ci_resp_tmuestra: String,
        celular_resp_tmuestra: String,
        correo_resp_tmuestra: String,*/
    }
)
module.exports=mongoose.model('Operador', userSchema)
