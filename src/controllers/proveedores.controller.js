import * as proveedorM from "../models/proveedores.models.js";

export const getAllProveedores = async (req, res) => {
    try {
        const proveedores = await proveedorM.getAllProveedores();
        res.status(200).json(proveedores);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getProveedorById = async (req, res) => {
    try {
        const proveedor = await proveedorM.getProveedorById(req.params.id);
        if (!proveedor) {
            return res.status(404).json({ message: "Proveedor no encontrado" });
        }
        res.status(200).json(proveedor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const agregarProveedor = async (req, res) => {
    try {
        if (!req.body.nombre) {
            return res.status(400).json({ message: "El campo nombre es requerido" });
        }

        const nuevo = await proveedorM.agregarProveedor(req.body);
        res.status(201).json(nuevo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const actualizarProveedor = async (req, res) => {
    try {
        const { id } = req.params;
        
        if (!req.body.nombre) {
            return res.status(400).json({ message: "El campo nombre es requerido para actualizar" });
        }

        const filasAfectadas = await proveedorM.actualizarProveedor(id, req.body);
        
        if (filasAfectadas === 0) {
            return res.status(404).json({ message: "Proveedor no encontrado para actualizar" });
        }
        
        res.status(200).json({ message: "Proveedor actualizado correctamente", idProveedor: id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const eliminarProveedor = async (req, res) => {
    try {
        const { id } = req.params;
        const filasAfectadas = await proveedorM.eliminarProveedor(id);
        
        if (filasAfectadas === 0) {
            return res.status(404).json({ message: "Proveedor no encontrado para eliminar" });
        }
        
        res.status(200).json({ message: "Proveedor eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};