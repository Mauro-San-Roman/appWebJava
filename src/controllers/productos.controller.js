import * as productoM from "../models/productos.models.js";

export const getAllProductos = async (req, res) => {
    try {
        const productos = await productoM.getAllProductos();
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getProductoById = async (req, res) => {
    try {
        const producto = await productoM.getProductoById(req.params.id);
        if (!producto) {
            return res.status(404).json({ message: "Producto no encontrados" });
        }
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const agregarProducto = async (req, res) => {
    try {
        if (!req.body.nombre) {
            return res.status(400).json({ message: "El campo nombre es requerido" });
        }

        const nuevo = await productoM.agregarProducto(req.body);

        res.status(201).json(nuevo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const actualizarProducto = async (req, res) => {
    try {
        const { id } = req.params; // Obtenemos el ID de la URL
        
        // Validación básica (opcional pero recomendada)
        if (!req.body.nombre) {
            return res.status(400).json({ message: "El campo nombre es requerido para actualizar" });
        }

        const filasAfectadas = await productoM.actualizarProducto(id, req.body);
        
        if (filasAfectadas === 0) {
            return res.status(404).json({ message: "Producto no encontrado para actualizar" });
        }
        
        res.status(200).json({ message: "Producto actualizado correctamente", id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};