import * as nosotrosM from "../models/nosotros.models.js";

export const getAllNosotros = async (req, res) => {
    try {
        const informacion = await nosotrosM.getAllNosotros();
        res.status(200).json(informacion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getNosotrosById = async (req, res) => {
    try {
        const informacion = await nosotrosM.getNosotrosById(req.params.id);
        if (!informacion) {
            return res.status(404).json({ message: "Información no encontrada" });
        }
        res.status(200).json(informacion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const agregarNosotros = async (req, res) => {
    try {
        if (!req.body.titulo) {
            return res.status(400).json({ message: "El campo título es requerido" });
        }

        const nuevo = await nosotrosM.agregarNosotros(req.body);

        res.status(201).json(nuevo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const actualizarNosotros = async (req, res) => {
    try {
        const { id } = req.params;
        
        if (!req.body.titulo) {
            return res.status(400).json({ message: "El campo título es requerido para actualizar" });
        }

        const filasAfectadas = await nosotrosM.actualizarNosotros(id, req.body);
        
        if (filasAfectadas === 0) {
            return res.status(404).json({ message: "Información no encontrada para actualizar" });
        }
        
        res.status(200).json({ message: "Información actualizada correctamente", id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const eliminarNosotros= async (req, res) => {
    try {
        const { id } = req.params;
        
        const filasAfectadas = await nosotrosM.eliminarNosotros(id);
        
        if (filasAfectadas === 0) {
            return res.status(404).json({ message: "Información no encontrada para eliminar" });
        }
        
        res.status(200).json({ message: "Información eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};