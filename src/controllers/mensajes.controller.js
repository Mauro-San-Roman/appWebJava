import * as MensajeModel from '../models/mensajes.models.js'; 

export const obtenerMensajes = async (req, res) => {
    try {
        const mensajes = await MensajeModel.getAllMensajes();
        res.status(200).json(mensajes);
    } catch (error) {
        // 👇 ESTA LÍNEA ES LA CLAVE PARA SABER QUÉ PASA
        console.error("🚨 ERROR REAL EN LA BASE DE DATOS:", error); 
        
        res.status(500).json({ error: "Error al obtener mensajes", detalle: error.message });
    }
};

export const crearMensaje = async (req, res) => {
    try {
        const nuevoMensaje = await MensajeModel.agregarMensaje(req.body);
        res.status(201).json(nuevoMensaje);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al crear el mensaje" });
    }
};

export const borrarMensaje = async (req, res) => {
    try {
        await MensajeModel.eliminarMensaje(req.params.id);
        res.status(200).json({ message: "Mensaje eliminado" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar" });
    }
};

export const modificarMensaje = async (req, res) => {
    try {
        await MensajeModel.actualizarMensaje(req.params.id, req.body);
        res.status(200).json({ message: "Estado de mensaje actualizado correctamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al actualizar el mensaje" });
    }
};