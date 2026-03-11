import * as contactoM from "../models/contacto.models.js";

export const getContacto = async (req, res) => {
    try { res.status(200).json(await contactoM.getContacto()); } 
    catch (error) { res.status(500).json({ error: error.message }); }
};
export const actualizarContacto = async (req, res) => {
    try {
        const filas = await contactoM.actualizarContacto(req.params.id, req.body);
        if (filas === 0) return res.status(404).json({ message: "Datos de contacto no encontrados" });
        res.status(200).json({ message: "Contacto actualizado" });
    } catch (error) { res.status(500).json({ error: error.message }); }
};