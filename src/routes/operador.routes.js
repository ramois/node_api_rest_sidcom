const express= require('express')
const router=express.Router()
const Operador = require('../models/operador.model')

//MIDDLEWARE
const getOperador= async (req,res,next)=>{
    let operador;
    const {id}=req.params;
    if(!id.match(/^[0-9a-fA-F]{24}$/)){
       return res.status(404).json(
        {
            message: 'El Id del Operador no es valido'
        }   
       ) 
    }
    try {
        operador=await Operador.findById(id);
        if(!operador){
            return res.status(404).json(
                {
                    message: 'Operador no fue encontrado'
                }
            )
        }
    } catch (error) {
        return res.status(500).json(
            {
                message: error.message
            }
        )
    }
    res.operador=operador;
    next()
}
//obtener todos los operadores
router.get('/', async (req,res)=>{
    try{
        const operadores = await Operador.find();
        console.log('GET ALL', operadores)
        if (operadores.length === 0) {
             return res.status(204).json([])
        }
        res.json(operadores)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})
//crear un nuevo libro(recurso) [POST]
router.post('/', async(req, res)=>{
    const {razon_social,nit,nim_niar,nro_nim,tipo_operador, nro_personeria, nro_matricula_seprec, fecha_exp_seprec, tipo_doc_creacion, doc_creacion, departamento, municipio, direccion, ubicacion, correo_inst, tel_fijo, celular, celular_2, act_exploracion, act_comer_interna, act_comer_externa, act_industrializacion, act_tras_colas,act_explotacion,act_refinacion,act_fundicion,tipo_explotacion,denominacion_area,nro_codigo_unico,nro_cuadricula,municipio_origen,nro_ruex,verif_cert_liberacion,nro_res_ministerial,nombre_resp_for101,ci_resp_for101,celular_resp_for101,correo_resp_for101,nombre_resp_tmuestra,ci_resp_tmuestra,celular_resp_tmuestra,correo_resp_tmuestra}=req?.body
    if( !razon_social || !nit || !nim_niar || !nro_nim || !tipo_operador  || !nro_matricula_seprec || !fecha_exp_seprec || !tipo_doc_creacion || !departamento || !municipio  || !direccion || !tel_fijo || !celular){
        return res.status(400).json({
            message: 'Los campos razon_social, nit, nim_niar, nro_nim, tipo_operador, nro_personeria, nro_matricula_seprec, fecha_exp_seprec, tipo_doc_creacion, doc_creacion, departamento, municipio, direccion, ubicacion, correo_inst, tel_fijo, celular, son obligatorios'
        })
    }
    const operador = new Operador(
        {
            razon_social,
            nit,
            nim_niar,
            nro_nim,
            tipo_operador,
            nro_personeria,
            nro_matricula_seprec,
            fecha_exp_seprec,
            tipo_doc_creacion,
            doc_creacion,
            departamento,
            municipio,
            direccion,
            ubicacion,
            correo_inst,
            tel_fijo,
            celular,
            celular_2,
            act_exploracion,
            act_comer_interna,
            act_comer_externa,
            act_industrializacion,
            act_tras_colas,
            act_explotacion,
            act_refinacion,
            act_fundicion,
            tipo_explotacion,
            denominacion_area,
            nro_codigo_unico,
            nro_cuadricula,
            municipio_origen,
            nro_ruex,
            verif_cert_liberacion,
            nro_res_ministerial,
            nombre_resp_for101,
            ci_resp_for101,
            celular_resp_for101,
            correo_resp_for101,
            nombre_resp_tmuestra,
            ci_resp_tmuestra,
            celular_resp_tmuestra,
            correo_resp_tmuestra,
        }
    )
    try {
        const newOperador = await operador.save()
        console.log(newOperador)
        res.status(201).json(newOperador)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})
router.get('/:id', getOperador, async(req,res) =>{
    res.json(res.operador)
})
router.put('/:id', getOperador, async(req,res) =>{
    try {
        const operador = res.operador //recupera datos de un libro mediante get
        // si se manda algo desde el body se modifica, sino de mantiene el dato
        operador.razon_social=req.body.razon_social || operador.razon_social;
        operador.nit=req.body.nit || operador.nit;
        operador.nim_niar=req.body.nim_niar || operador.nim_niar;
        operador.nro_nim=req.body.nro_nim || operador.nro_nim;
        operador.tipo_operador=req.body.tipo_operador || operador.tipo_operador;
        operador.nro_personeria=req.body.nro_personeria || operador.nro_personeria;
        operador.nro_matricula_seprec=req.body.nro_matricula_seprec || operador.nro_matricula_seprec;
        operador.fecha_exp_seprec=req.body.fecha_exp_seprec || operador.fecha_exp_seprec;
        operador.tipo_doc_creacion=req.body.tipo_doc_creacion || operador.tipo_doc_creacion;
        operador.doc_creacion=req.body.doc_creacion || operador.doc_creacion;
        operador.departamento=req.body.departamento || operador.departamento;
        operador.municipio=req.body.municipio || operador.municipio;
        operador.direccion=req.body.direccion || operador.direccion;
        operador.ubicacion=req.body.ubicacion || operador.ubicacion;
        operador.correo_inst=req.body.correo_inst || operador.correo_inst;
        operador.tel_fijo=req.body.tel_fijo || operador.tel_fijo;
        operador.celular=req.body.celular || operador.celular;
        operador.celular_2=req.body.celular_2 || operador.celular_2;
        operador.act_exploracion=req.body.act_exploracion || operador.act_exploracion;
        operador.act_comer_interna=req.body.act_comer_interna || operador.act_comer_interna;
        operador.act_comer_externa=req.body.act_comer_externa || operador.act_comer_externa;
        operador.act_industrializacion=req.body.act_industrializacion || operador.act_industrializacion;
        operador.act_tras_colas=req.body.act_tras_colas || operador.act_tras_colas;
        operador.act_explotacion=req.body.act_explotacion || operador.act_explotacion;
        operador.act_refinacion=req.body.act_refinacion || operador.act_refinacion;
        operador.act_fundicion=req.body.act_fundicion || operador.act_fundicion;
        operador.tipo_explotacion=req.body.tipo_explotacion || operador.tipo_explotacion;
        operador.denominacion_area=req.body.denominacion_area || operador.denominacion_area;
        operador.nro_codigo_unico=req.body.nro_codigo_unico || operador.nro_codigo_unico;
        operador.nro_cuadricula=req.body.nro_cuadricula || operador.nro_cuadricula;
        operador.municipio_origen=req.body.municipio_origen || operador.municipio_origen;
        operador.nro_ruex=req.body.nro_ruex || operador.nro_ruex;
        operador.verif_cert_liberacion=req.body.verif_cert_liberacion || operador.verif_cert_liberacion;
        operador.nro_res_ministerial=req.body.nro_ruex || operador.nro_res_ministerial;
        operador.nombre_resp_for101=req.body.nombre_resp_for101 || operador.nombre_resp_for101;
        operador.ci_resp_for101=req.body.ci_resp_for101 || operador.ci_resp_for101;
        operador.celular_resp_for101=req.body.celular_resp_for101 || operador.celular_resp_for101;
        operador.correo_resp_for101=req.body.correo_resp_for101 || operador.correo_resp_for101;
        operador.nombre_resp_tmuestra=req.body.nombre_resp_tmuestra || operador.nombre_resp_tmuestra;
        operador.ci_resp_tmuestra=req.body.ci_resp_tmuestra || operador.ci_resp_tmuestra;
        operador.celular_resp_tmuestra=req.body.celular_resp_tmuestra || operador.celular_resp_tmuestra;
        operador.correo_resp_tmuestra=req.body.correo_resp_tmuestra || operador.correo_resp_tmuestra;

        const updateOperadores= await operador.save()
        res.json(updateOperadores)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })        
    }
})
router.patch('/:id', getOperador, async(req,res) =>{
    if (!req.body.razon_social && !req.body.nit && !req.body.nim_niar && !req.body.nro_nim && !req.body.tipo_operador && !req.body.nro_personeria
        && !req.body.nro_matricula_seprec && !req.body.fecha_exp_seprec && !req.body.tipo_doc_creacion) {
        res.status(400).json({
            message:'Al menos uno de estos campos debe ser enviado: email, contraseña, nombre, apellidos, ci, celular, rol, id_operador y estado'
        })   
    }
    try {
        const operador = res.operador //recupera datos de un libro mediante get
        // si se manda algo desde el body se modifica, sino de mantiene el dato
        operador.razon_social=req.body.razon_social || operador.razon_social;
        operador.nit=req.body.nit || operador.nit;
        operador.nim_niar=req.body.nim_niar || operador.nim_niar;
        operador.nro_nim=req.body.nro_nim || operador.nro_nim;
        operador.tipo_operador=req.body.tipo_operador || operador.tipo_operador;
        operador.nro_personeria=req.body.nro_personeria || operador.nro_personeria;
        operador.nro_matricula_seprec=req.body.nro_matricula_seprec || operador.nro_matricula_seprec;
        operador.fecha_exp_seprec=req.body.fecha_exp_seprec || operador.fecha_exp_seprec;
        operador.tipo_doc_creacion=req.body.tipo_doc_creacion || operador.tipo_doc_creacion;
        operador.doc_creacion=req.body.doc_creacion || operador.doc_creacion;
        operador.departamento=req.body.departamento || operador.departamento;
        operador.municipio=req.body.municipio || operador.municipio;
        operador.direccion=req.body.direccion || operador.direccion;
        operador.ubicacion=req.body.ubicacion || operador.ubicacion;
        operador.correo_inst=req.body.correo_inst || operador.correo_inst;
        operador.tel_fijo=req.body.tel_fijo || operador.tel_fijo;
        operador.celular=req.body.celular || operador.celular;
        operador.celular_2=req.body.celular_2 || operador.celular_2;
        operador.act_exploracion=req.body.act_exploracion || operador.act_exploracion;
        operador.act_comer_interna=req.body.act_comer_interna || operador.act_comer_interna;
        operador.act_comer_externa=req.body.act_comer_externa || operador.act_comer_externa;
        operador.act_industrializacion=req.body.act_industrializacion || operador.act_industrializacion;
        operador.act_tras_colas=req.body.act_tras_colas || operador.act_tras_colas;
        operador.act_explotacion=req.body.act_explotacion || operador.act_explotacion;
        operador.act_refinacion=req.body.act_refinacion || operador.act_refinacion;
        operador.act_fundicion=req.body.act_fundicion || operador.act_fundicion;
        operador.tipo_explotacion=req.body.tipo_explotacion || operador.tipo_explotacion;
        operador.denominacion_area=req.body.denominacion_area || operador.denominacion_area;
        operador.nro_codigo_unico=req.body.nro_codigo_unico || operador.nro_codigo_unico;
        operador.nro_cuadricula=req.body.nro_cuadricula || operador.nro_cuadricula;
        operador.municipio_origen=req.body.municipio_origen || operador.municipio_origen;
        operador.nro_ruex=req.body.nro_ruex || operador.nro_ruex;
        operador.verif_cert_liberacion=req.body.verif_cert_liberacion || operador.verif_cert_liberacion;
        operador.nro_res_ministerial=req.body.nro_ruex || operador.nro_res_ministerial;
        operador.nombre_resp_for101=req.body.nombre_resp_for101 || operador.nombre_resp_for101;
        operador.nombre_resp_for101=req.body.nombre_resp_for101 || operador.nombre_resp_for101;
        operador.ci_resp_for101=req.body.ci_resp_for101 || operador.ci_resp_for101;
        operador.celular_resp_for101=req.body.celular_resp_for101 || operador.celular_resp_for101;
        operador.correo_resp_for101=req.body.correo_resp_for101 || operador.correo_resp_for101;
        operador.nombre_resp_tmuestra=req.body.nombre_resp_tmuestra || operador.nombre_resp_tmuestra;
        operador.ci_resp_tmuestra=req.body.ci_resp_tmuestra || operador.ci_resp_tmuestra;
        operador.celular_resp_tmuestra=req.body.celular_resp_tmuestra || operador.celular_resp_tmuestra;
        operador.correo_resp_tmuestra=req.body.correo_resp_tmuestra || operador.correo_resp_tmuestra;
    
        const updateOperadores= await operador.save()
        res.json(updateOperadores)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })        
    }
})
router.delete('/:id', getOperador, async(req,res) =>{
    try {
        const operador=res.operador
        await operador.deleteOne({
            _id: operador._id
        });
        res.json({
            message:`el operador con razon social ${operador.razon_social} fue eliminado exitosamente`
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
        
    }
    
})
module.exports =router