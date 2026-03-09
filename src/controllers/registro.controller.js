import * as registroM from "../models/registro.models.js";

export const getAllRegistro = async (req, res) => {
    try {
        const registros = await registroM.getAllRegistro();
        res.status(200).json(registros);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getRegistroById = async (req, res) => {
    try {
        const registro = await registroM.getRegistroById(req.params.id);
        if (!registro) {
            return res.status(404).json({ message: "Registro no encontrado" });
        }
        res.status(200).json(registro);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const agregarRegistro = async (req, res) => {
    try {
        if (!req.body.idCliente || !req.body.idDispositivo) {
            return res.status(400).json({ message: "Los campos idCliente e idDispositivo son requeridos" });
        }

        const nuevo = await registroM.agregarRegistro(req.body);
        res.status(201).json(nuevo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const actualizarRegistro = async (req, res) => {
    try {
        const { id } = req.params;
        
        if (!req.body.idCliente || !req.body.idDispositivo) {
            return res.status(400).json({ message: "Los campos idCliente e idDispositivo son requeridos para actualizar" });
        }

        const filasAfectadas = await registroM.actualizarRegistro(id, req.body);
        
        if (filasAfectadas === 0) {
            return res.status(404).json({ message: "Registro no encontrado para actualizar" });
        }
        
        res.status(200).json({ message: "Registro actualizado correctamente", folio: id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const eliminarRegistro = async (req, res) => {
    try {
        const { id } = req.params;
        const filasAfectadas = await registroM.eliminarRegistro(id);
        
        if (filasAfectadas === 0) {
            return res.status(404).json({ message: "Registro no encontrado para eliminar" });
        }
        
        res.status(200).json({ message: "Registro eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};