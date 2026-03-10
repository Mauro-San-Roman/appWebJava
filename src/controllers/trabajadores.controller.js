import * as trabajadorM from "../models/trabajadores.models.js";

export const getAllTrabajadores = async (req, res) => {
    try {
        const trabajadores = await trabajadorM.getAllTrabajadores();
        res.status(200).json(trabajadores);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getTrabajadorById = async (req, res) => {
    try {
        const trabajador = await trabajadorM.getTrabajadorById(req.params.id);
        if (!trabajador) {
            return res.status(404).json({ message: "Trabajador no encontrado" });
        }
        res.status(200).json(trabajador);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const agregarTrabajador = async (req, res) => {
    try {
        if (!req.body.nombre || !req.body.email) {
            return res.status(400).json({ message: "Los campos nombre y email son requeridos" });
        }

        const nuevo = await trabajadorM.agregarTrabajador(req.body);
        res.status(201).json(nuevo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const actualizarTrabajador = async (req, res) => {
    try {
        const { id } = req.params;
        
        if (!req.body.nombre || !req.body.email) {
            return res.status(400).json({ message: "Los campos nombre y email son requeridos para actualizar" });
        }

        const filasAfectadas = await trabajadorM.actualizarTrabajador(id, req.body);
        
        if (filasAfectadas === 0) {
            return res.status(404).json({ message: "Trabajador no encontrado para actualizar" });
        }
        
        res.status(200).json({ message: "Trabajador actualizado correctamente", idTrabajador: id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const eliminarTrabajador = async (req, res) => {
    try {
        const { id } = req.params;
        const filasAfectadas = await trabajadorM.eliminarTrabajador(id);
        
        if (filasAfectadas === 0) {
            return res.status(404).json({ message: "Trabajador no encontrado para eliminar" });
        }
        
        res.status(200).json({ message: "Trabajador eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};