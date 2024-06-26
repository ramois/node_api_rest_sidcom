const express= require('express')
const router=express.Router()
const User = require('../models/user.model')

//MIDDLEWARE
const getUser= async (req,res,next)=>{
    let user;
    const {id}=req.params;
    if(!id.match(/^[0-9a-fA-F]{24}$/)){
       return res.status(404).json(
        {
            message: 'El Id del Usuario no es valido'
        }   
       ) 
    }
    try {
        user=await User.findById(id);
        if(!user){
            return res.status(404).json(
                {
                    message: 'Usuario no fue encontrado'
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
    res.user=user;
    next()
}
//obtener todos los libros 
router.get('/', async (req,res)=>{
    try{
        const users = await User.find();
        console.log('GET ALL', users)
        if (users.length === 0) {
             return res.status(204).json([])
        }
        res.json(users)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})
//crear un nuevo libro(recurso) [POST]
router.post('/', async(req, res)=>{
    const {email,password,nombre,apellidos,ci,celular}=req?.body
    if( !email || !password || !nombre || !apellidos || !ci || !celular){
        return res.status(400).json({
            message: 'Los campos email, contraseña, nombre, apellidos, ci y celular son obligatorios'
        })
    }
    const user = new User(
        {
            email,
            password,
            nombre,
            apellidos,
            ci,
            celular
        }
    )
    try {
        const newUser = await user.save()
        console.log(newUser)
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})
router.get('/:id', getUser, async(req,res) =>{
    res.json(res.user)
})
router.put('/:id', getUser, async(req,res) =>{
    try {
        const user = res.user //recupera datos de un libro mediante get
        // si se manda algo desde el body se modifica, sino de mantiene el dato
        user.email=req.body.email || user.email;
        user.password=req.body.password || user.password;
        user.nombre=req.body.nombre || user.nombre;
        user.apellidos=req.body.apellidos || user.apellidos;
        user.ci=req.body.ci || user.ci;
        user.celular=req.body.celular || user.celular;
        const updateUsers= await user.save()
        res.json(updateUsers)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })        
    }
})
router.patch('/:id', getUser, async(req,res) =>{
    if (!req.body.email && !req.body.password && !req.body.nombre && !req.body.apellidos && !req.body.ci && !req.body.celular ) {
        res.status(400).json({
            message:'Al menos uno de estos campos debe ser enviado: email, contraseña, nombre, apellidos, ci y celular'
        })   
    }
    try {
        const user = res.user //recupera datos de un libro mediante get
        // si se manda algo desde el body se modifica, sino de mantiene el dato
        user.email=req.body.email || user.email;
        user.password=req.body.password || user.password;
        user.nombre=req.body.nombre || user.nombre;
        user.apellidos=req.body.apellidos || user.apellidos;
        user.ci=req.body.ci || user.ci;
        user.celular=req.body.celular || user.celular;
        const updateUsers= await user.save()
        res.json(updateUsers)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })        
    }
})
router.delete('/:id', getUser, async(req,res) =>{
    try {
        const user=res.user
        await user.deleteOne({
            _id: user._id
        });
        res.json({
            message:`el usuario con email ${user.email} fue eliminado exitosamente`
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
        
    }
    
})
module.exports =router