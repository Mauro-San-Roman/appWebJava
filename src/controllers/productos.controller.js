import * as productoM from"../models/productos.models.js"

export const getAllProductos= async (req,res)=>{
    try {
        
        const productos=await productoM.getAllProductos()
        res.status(200).json(productos)

    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

export const getProductoById=async (req,res)=>{
    try {
        
        const producto= await productoM.getProductoById(req.params.id)
        if (!producto) {
            res.status(404).json({message:"Producto no encontrados"})
        }
        res.status(200).json(producto) 
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}