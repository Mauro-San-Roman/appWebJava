import * as rolM from "../models/roles.models.js";

export const getAllRoles = async (req, res) => {
    try {
        const roles = await rolM.getAllRoles();
        res.status(200).json(roles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getRolById = async (req, res) => {
    try {
        const rol = await rolM.getRolById(req.params.id);
        if (!rol) {
            return res.status(404).json({ message: "Rol no encontrado" });
        }
        res.status(200).json(rol);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const agregarRol = async (req, res) => {
    try {
        if (!req.body.nombreRol) {
            return res.status(400).json({ message: "El campo nombreRol es requerido" });
        }

        const nuevo = await rolM.agregarRol(req.body);
        res.status(201).json(nuevo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const actualizarRol = async (req, res) => {
    try {
        const { id } = req.params;
        
        if (!req.body.nombreRol) {
            return res.status(400).json({ message: "El campo nombreRol es requerido para actualizar" });
        }

        const filasAfectadas = await rolM.actualizarRol(id, req.body);
        
        if (filasAfectadas === 0) {
            return res.status(404).json({ message: "Rol no encontrado para actualizar" });
        }
        
        res.status(200).json({ message: "Rol actualizado correctamente", idRol: id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const eliminarRol = async (req, res) => {
    try {
        const { id } = req.params;
        const filasAfectadas = await rolM.eliminarRol(id);
        
        if (filasAfectadas === 0) {
            return res.status(404).json({ message: "Rol no encontrado para eliminar" });
        }
        
        res.status(200).json({ message: "Rol eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};