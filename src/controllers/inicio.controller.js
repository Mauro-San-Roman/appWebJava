import * as inicioM from "../models/inicio.models.js";

export const getInicio = async (req, res) => {
    try { 
        // Ya no le pasamos req.params.id
        const inicio = await configM.getInicio();
        res.status(200).json(inicio); 
    } catch (error) { 
        res.status(500).json({ error: error.message }); 
    }
};
export const actualizarInicio = async (req, res) => {
    try {
        const filas = await inicioM.actualizarInicio(req.params.id, req.body);
        if (filas === 0) return res.status(404).json({ message: "Sección de inicio no encontrada" });
        res.status(200).json({ message: "Inicio actualizado exitosamente" });
    } catch (error) { res.status(500).json({ error: error.message }); }
};
