import * as MensajeModel from '../models/mensajes.models.js'; 

export const getAllMensajes = async (req, res) => {
    try {
        // Ahora llamamos a MensajeModel.obtenerMensajes() 
        const mensajes = await MensajeModel.getAllMensajes();
        res.status(200).json(mensajes);
    } catch (error) {
        console.error("🚨 ERROR EN BD:", error);
        res.status(500).json({ error: "Error al obtener mensajes", detalle: error.message });
    }
};

export const crearMensaje = async (req, res) => {
    try {
        const nuevoMensaje = await MensajeModel.crearMensaje(req.body);
        res.status(201).json(nuevoMensaje);
    } catch (error) {
        console.error("🚨 ERROR EN BD:", error);
        res.status(500).json({ error: "Error al crear el mensaje", detalle: error.message });
    }
};

export const borrarMensaje = async (req, res) => {
    try {
        await MensajeModel.borrarMensaje(req.params.id);
        res.status(200).json({ message: "Mensaje eliminado" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar" });
    }
};

export const modificarMensaje = async (req, res) => {
    try {
        await MensajeModel.modificarMensaje(req.params.id, req.body);
        res.status(200).json({ message: "Estado actualizado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al actualizar" });
    }
};