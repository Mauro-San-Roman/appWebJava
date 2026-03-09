import * as agendaM from "../models/agenda.models.js";

export const getAllAgenda = async (req, res) => {
    try {
        const agendas = await agendaM.getAllAgenda();
        res.status(200).json(agendas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAgendaById = async (req, res) => {
    try {
        const agenda = await agendaM.getAgendaById(req.params.id);
        if (!agenda) {
            return res.status(404).json({ message: "Cita no encontrada" });
        }
        res.status(200).json(agenda);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const agregarAgenda = async (req, res) => {
    try {
        if (!req.body.nombreCitado) {
            return res.status(400).json({ message: "El campo nombreCitado es requerido" });
        }

        const nuevo = await agendaM.agregarAgenda(req.body);

        res.status(201).json(nuevo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const actualizarAgenda = async (req, res) => {
    try {
        const { id } = req.params;
        if (!req.body.nombreCitado) {
            return res.status(400).json({ message: "El campo nombreCitado es requerido para actualizar" });
        }

        const filasAfectadas = await agendaM.actualizarAgenda(id, req.body);
        
        if (filasAfectadas === 0) {
            return res.status(404).json({ message: "Cita no encontrada para actualizar" });
        }
        
        res.status(200).json({ message: "Cita actualizada correctamente", id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const eliminarAgenda = async (req, res) => {
    try {
        const { id } = req.params;
        
        const filasAfectadas = await agendaM.eliminarAgenda(id);
        
        if (filasAfectadas === 0) {
            return res.status(404).json({ message: "Cita no encontrada para eliminar" });
        }
        
        res.status(200).json({ message: "Cita eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};