import * as dispositivoM from "../models/dispositivos.models.js";

export const getAllDispositivos = async (req, res) => {
    try {
        const dispositivos = await dispositivoM.getAllDispositivos();
        res.status(200).json(dispositivos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getDispositivoById = async (req, res) => {
    try {
        const dispositivo = await dispositivoM.getDispositivoById(req.params.id);
        if (!dispositivo) {
            return res.status(404).json({ message: "Dispositivo no encontrado" });
        }
        res.status(200).json(dispositivo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const agregarDispositivo = async (req, res) => {
    try {
        if (!req.body.modelo || !req.body.idCliente) {
            return res.status(400).json({ message: "Los campos modelo e idCliente son requeridos" });
        }

        const nuevo = await dispositivoM.agregarDispositivo(req.body);

        res.status(201).json(nuevo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const actualizarDispositivo = async (req, res) => {
    try {
        const { id } = req.params;
        
        if (!req.body.modelo || !req.body.idCliente) {
            return res.status(400).json({ message: "Los campos modelo e idCliente son requeridos para actualizar" });
        }

        const filasAfectadas = await dispositivoM.actualizarDispositivo(id, req.body);
        
        if (filasAfectadas === 0) {
            return res.status(404).json({ message: "Dispositivo no encontrado para actualizar" });
        }
        
        res.status(200).json({ message: "Dispositivo actualizado correctamente", id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const eliminarDispositivo = async (req, res) => {
    try {
        const { id } = req.params;
        
        const filasAfectadas = await dispositivoM.eliminarDispositivo(id);
        
        if (filasAfectadas === 0) {
            return res.status(404).json({ message: "Dispositivo no encontrado para eliminar" });
        }
        
        res.status(200).json({ message: "Dispositivo eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};