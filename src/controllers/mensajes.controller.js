import * as mensajeM from "../models/mensajes.models.js";
export const getAllMensajes = async (req, res) => {
    try {
        const mensajes = await mensajeM.getAllMensajes();
        res.status(200).json(mensajes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const agregarMensaje = async (req, res) => {
    try {
        if (!req.body.correo || !req.body.mensaje)
            return res
                .status(400)
                .json({ message: "Correo y mensaje son requeridos" });
        const nuevo = await mensajeM.agregarMensaje(req.body);
        res.status(201).json(nuevo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const eliminarMensaje = async (req, res) => {
    try {
        const filas = await mensajeM.eliminarMensaje(req.params.id);
        if (filas === 0)
            return res.status(404).json({ message: "Mensaje no encontrado" });
        res.status(200).json({ message: "Mensaje eliminado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
