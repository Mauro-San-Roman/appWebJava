import * as servicioM from "../models/servicios.models.js";

export const getAllServicios = async (req, res) => {
    try {
        const clientes = await servicioM.getAllServicios();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getServicioById = async (req, res) => {
    try {
        const clientes = await servicioM.getServicioById(req.params.id);
        if (!clientes) {
            return res.status(404).json({ message: "Servicio no encontrado" });
        }
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const agregarServicio = async (req, res) => {
    try {
        if (!req.body.nombre) {
            return res.status(400).json({ message: "El campo nombre es requerido" });
        }

        const nuevo = await servicioM.agregarServicio(req.body);

        res.status(201).json(nuevo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const actualizarServicio = async (req, res) => {
    try {
        const { id } = req.params;
        
        if (!req.body.nombre) {
            return res.status(400).json({ message: "El campo nombre es requerido para actualizar" });
        }

        const filasAfectadas = await servicioM.actualizarServicio(id, req.body);
        
        if (filasAfectadas === 0) {
            return res.status(404).json({ message: "Servicio no encontrado para actualizar" });
        }
        
        res.status(200).json({ message: "Servicio actualizado correctamente", id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const eliminarServicio = async (req, res) => {
    try {
        const { id } = req.params;
        
        const filasAfectadas = await servicioM.eliminarServicio(id);
        
        if (filasAfectadas === 0) {
            return res.status(404).json({ message: "Servicio no encontrado para eliminar" });
        }
        
        res.status(200).json({ message: "Servicio eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};