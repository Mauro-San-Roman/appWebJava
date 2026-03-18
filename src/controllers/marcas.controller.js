import * as marcasM from "../models/marcas.models.js";

export const getAllMarcas = async (req, res) => {
    try {
        const informacion = await marcasM.getAllMarcas();
        res.status(200).json(informacion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getMarcasById = async (req, res) => {
    try {
        const informacion = await marcasM.getMarcasById(req.params.id);
        if (!informacion) {
            return res.status(404).json({ message: "Información no encontrada" });
        }
        res.status(200).json(informacion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};