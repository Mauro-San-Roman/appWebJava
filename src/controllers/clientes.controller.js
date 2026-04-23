import bcrypt from 'bcryptjs';
import * as clienteModel from '../models/clientes.models.js';

export const getAllClientes = async (req, res) => {
    try {
        const clientes = await clienteModel.getAllClientes();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getClienteById = async (req, res) => {
    try {
        const clientes = await clienteModel.getClienteById(req.params.id);
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
        // Extraemos fecha_registro del body
        const { nombre, aPaterno, aMaterno, telefono, CPostal, estado, municipio, asentamiento, calle, email, password, fecha_registro } = req.body;
        
        if (!email || !password || !nombre) {
            return res.status(400).json({ message: 'Nombre, email y password son obligatorios' });
        }

        const existe = await clienteModel.getClienteByEmail(email);
        if (existe) return res.status(409).json({ message: 'El correo ya está registrado' });

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        // Si el frontend no envía la fecha, usamos la fecha y hora actual del servidor por defecto
        const fechaRegistroFinal = fecha_registro || new Date().toISOString().slice(0, 19).replace('T', ' ');

        const nuevo = await clienteModel.agregarCliente({ 
            nombre, aPaterno, aMaterno, telefono, CPostal, estado, municipio, asentamiento, calle, email, 
            password: passwordHash,
            fecha_registro: fechaRegistroFinal
        });

        res.status(201).json({ message: 'Cliente registrado con éxito', data: nuevo });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const actualizarCliente = async (req, res) => {
    try {
        const { id } = req.params;
        let datosActualizados = { ...req.body };
        
        if (!datosActualizados.nombre) {
            return res.status(400).json({ message: "El campo nombre es requerido para actualizar" });
        }

        // Consultamos al cliente actual una sola vez para mantener su password o su fecha de registro si no se envían
        const clienteActual = await clienteModel.getClienteById(id);
        if (!clienteActual) return res.status(404).json({ message: "Cliente no encontrado" });

        if (datosActualizados.password) {
            const salt = await bcrypt.genSalt(10);
            datosActualizados.password = await bcrypt.hash(datosActualizados.password, salt);
        } else {
            datosActualizados.password = clienteActual.password;
        }

        // Si la petición de actualización no incluye la fecha_registro, conservamos la que ya tenía
        if (!datosActualizados.fecha_registro) {
            datosActualizados.fecha_registro = clienteActual.fecha_registro;
        }

        const filasAfectadas = await clienteModel.actualizarCliente(id, datosActualizados);
        
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
        
        const filasAfectadas = await clienteModel.eliminarCliente(id);
        
        if (filasAfectadas === 0) {
            return res.status(404).json({ message: "Cliente no encontrado para eliminar" });
        }
        
        res.status(200).json({ message: "Cliente eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};