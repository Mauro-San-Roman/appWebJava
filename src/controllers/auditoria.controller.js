import * as auditoriaM from "../models/auditoria.models.js";

export const getAllAuditoria = async (req, res) => {
    try {
        const registrosAuditoria = await auditoriaM.getAllAuditoria();
        res.status(200).json(registrosAuditoria);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};