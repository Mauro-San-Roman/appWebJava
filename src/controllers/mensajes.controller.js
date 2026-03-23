const MensajeModel = require('../models/mensajes.models.js'); 

const obtenerMensajes = async (req, res) => {
    try {
        const mensajes = await MensajeModel.getAllMensajes();
        res.status(200).json(mensajes);
    } catch (error) {
        console.error("🚨 ERROR EN BD:", error);
        res.status(500).json({ error: "Error al obtener mensajes", detalle: error.message });
    }
};

const crearMensaje = async (req, res) => {
    try {
        const nuevoMensaje = await MensajeModel.agregarMensaje(req.body);
        res.status(201).json(nuevoMensaje);
    } catch (error) {
        console.error("🚨 ERROR EN BD:", error);
        res.status(500).json({ error: "Error al crear el mensaje", detalle: error.message });
    }
};

const borrarMensaje = async (req, res) => {
    try {
        await MensajeModel.eliminarMensaje(req.params.id);
        res.status(200).json({ message: "Mensaje eliminado" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar" });
    }
};

const modificarMensaje = async (req, res) => {
    try {
        await MensajeModel.actualizarMensaje(req.params.id, req.body);
        res.status(200).json({ message: "Estado de mensaje actualizado correctamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al actualizar el mensaje" });
    }
};

module.exports = {
    obtenerMensajes,
    crearMensaje,
    borrarMensaje,
    modificarMensaje
};