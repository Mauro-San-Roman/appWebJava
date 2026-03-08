import * as clienteM from "../models/clientes.models.js";

export const getAllClientes = async (req, res) => {
    try {
        const clientes = await clienteM.getAllClientes();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getClienteById = async (req, res) => {
    try {
        const clientes = await clienteM.getClienteById(req.params.id);
        if (!clientes) {
            return res.status(404).json({ message: "Cliente no encontrado" });
        }
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const agregarCliente = async (req, res) => {
    try {
        if (!req.body.nombre) {
            return res.status(400).json({ message: "El campo nombre es requerido" });
        }

        const nuevo = await clienteM.agregarCliente(req.body);

        res.status(201).json(nuevo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const actualizarCliente = async (req, res) => {
    try {
        const { id } = req.params;
        
        if (!req.body.nombre) {
            return res.status(400).json({ message: "El campo nombre es requerido para actualizar" });
        }

        const filasAfectadas = await clienteM.actualizarCliente(id, req.body);
        
        if (filasAfectadas === 0) {
            return res.status(404).json({ message: "Cliente no encontrado para actualizar" });
        }
        
        res.status(200).json({ message: "Cliente actualizado correctamente", id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const eliminarCliente = async (req, res) => {
    try {
        const { id } = req.params;
        
        const filasAfectadas = await clienteM.eliminarCliente(id);
        
        if (filasAfectadas === 0) {
            return res.status(404).json({ message: "Cliente no encontrado para eliminar" });
        }
        
        res.status(200).json({ message: "Cliente eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};