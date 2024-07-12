const express= require('express')
const router=express.Router()
const Muestra = require('../models/tmuestra.model')

//MIDDLEWARE
const getMuestra= async (req,res,next)=>{
    let muestra;
    const {id}=req.params;
    if(!id.match(/^[0-9a-fA-F]{24}$/)){
       return res.status(404).json(
        {
            message: 'El Id de la muestra no es valido'
        }   
       ) 
    }
    try {
        muestra=await Muestra.findById(id);
        if(!muestra){
            return res.status(404).json(
                {
                    message: 'muestra no fue encontrado'
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
    res.muestra=muestra;
    next()
}
//obtener todos las muestras
router.get('/', async (req,res)=>{
    try{
        const muestras = await Muestra.find();
        console.log('GET ALL', muestras)
        if (muestras.length === 0) {
             return res.status(204).json([])
        }
        res.json(muestras)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})
//crear un nuevo libro(recurso) [POST]
router.post('/', async(req, res)=>{
    const {fecha_emision, hora_emision, ubi_geografica, lugar_verificacion, id_operador, responsable, lotes, tipo_muestra, presentacion, sacos, camiones, peso_neto, peso_parcial, minerales, id_municipio,senarecom,tipo_agranel,tipo_emsacado,tipo_lingotes,tipo_sal,tipo_otr,observaciones, estado}=req?.body
    if( !lugar_verificacion || !id_operador || !presentacion || !lotes || !peso_neto || !camiones || !sacos || !senarecom || !id_municipio || !estado){
        return res.status(400).json({
            message: 'Los campos son obligatorios'
        })
    }
    const muestra = new Muestra(
        {
            fecha_emision,
            hora_emision,
            ubi_geografica,
            lugar_verificacion,
            id_operador,
            responsable,
            lotes,
            tipo_muestra,
            presentacion,        
            sacos,
            camiones,
            peso_neto,
            peso_parcial,      
            minerales,
            id_municipio,
            senarecom,
            tipo_agranel,
            tipo_emsacado,
            tipo_lingotes,
            tipo_sal,
            tipo_otr,
            observaciones,
            estado,
        }
    )
    try {
        const newMuestra = await muestra.save()
        console.log(newMuestra)
        res.status(201).json(newMuestra)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})
router.get('/:id', getMuestra, async(req,res) =>{
    res.json(res.muestra)
})
router.put('/:id', getMuestra, async(req,res) =>{
    try {
        const muestra = res.muestra //recupera datos de un libro mediante get
        // si se manda algo desde el body se modifica, sino de mantiene el dato
        muestra.lugar_verificacion=req.body.lugar_verificacion || muestra.lugar_verificacion;
        muestra.id_operador=req.body.id_operador || muestra.id_operador;
        muestra.presentacion=req.body.presentacion || muestra.presentacion;
        muestra.lotes=req.body.lotes || muestra.lotes;
        muestra.peso_neto=req.body.peso_neto || muestra.peso_neto;
        muestra.camiones=req.body.camiones || muestra.camiones;
        muestra.sacos=req.body.sacos || muestra.sacos;
        muestra.senarecom=req.body.senarecom || muestra.senarecom;
        muestra.id_municipio=req.body.id_municipio || muestra.id_municipio;
        muestra.estado=req.body.estado || muestra.estado;
        const updateMuestras= await muestra.save()
        res.json(updateMuestras)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })        
    }
})
router.patch('/:id', getMuestra, async(req,res) =>{
    if (!req.body.lugar_verificacion && !req.body.id_operador && !req.body.presentacion&& !req.body.lotes && !req.body.peso_neto && !req.body.camiones && !req.body.sacos && !req.body.senarecom && !req.body.id_municipio && !req.body.estado) {
        res.status(400).json({
            message:'Al menos uno de estos campos debe ser enviado: email, contraseña, nombre, apellidos, ci, celular, rol, id_operador y estado'
        })   
    }
    try {
        const muestra = res.muestra //recupera datos de un libro mediante get
        // si se manda algo desde el body se modifica, sino de mantiene el dato
        muestra.lugar_verificacion=req.body.lugar_verificacion || muestra.lugar_verificacion;
        muestra.id_operador=req.body.id_operador || muestra.id_operador;
        muestra.presentacion=req.body.presentacion || muestra.presentacion;
        muestra.lotes=req.body.lotes || muestra.lotes;
        muestra.peso_neto=req.body.peso_neto || muestra.peso_neto;
        muestra.camiones=req.body.camiones || muestra.camiones;
        muestra.sacos=req.body.sacos || muestra.sacos;
        muestra.senarecom=req.body.senarecom || muestra.senarecom;
        muestra.id_municipio=req.body.id_municipio || muestra.id_municipio;
        muestra.estado=req.body.estado || muestra.estado;
        const updateMuestras= await muestra.save()
        res.json(updateMuestras)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })        
    }
})
router.delete('/:id', getMuestra, async(req,res) =>{
    try {
        const muestra=res.muestra
        await muestra.deleteOne({
            _id: muestra._id
        });
        res.json({
            message:`el usuario con email ${muestra.email} fue eliminado exitosamente`
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
        
    }
    
})
module.exports =router
