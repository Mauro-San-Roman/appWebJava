import * as inicioM from "../models/inicio.models.js";

export const getInicio = async (req, res) => {
    try { res.status(200).json(await inicioM.getInicioById(req.params.id)); }
    catch (error) { res.status(500).json({ error: error.message }); }
};
export const actualizarInicio = async (req, res) => {
    try {
        const filas = await inicioM.actualizarInicio(req.params.id, req.body);
        if (filas === 0) return res.status(404).json({ message: "Sección de inicio no encontrada" });
        res.status(200).json({ message: "Inicio actualizado exitosamente" });
    } catch (error) { res.status(500).json({ error: error.message }); }
};
