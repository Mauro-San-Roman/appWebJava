import bcrypt from 'bcryptjs';
import * as trabajadorM from "../models/trabajadores.models.js";

export const getAllTrabajadores = async (req, res) => {
    try {
        const trabajadores = await trabajadorM.getAllTrabajadores();
        res.status(200).json(trabajadores);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getTrabajadorById = async (req, res) => {
    try {
        const trabajador = await trabajadorM.getTrabajadorById(req.params.id);
        if (!trabajador) {
            return res.status(404).json({ message: "Trabajador no encontrado" });
        }
        res.status(200).json(trabajador);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const agregarTrabajador = async (req, res) => {
    try {
        const { nombre, aPaterno, aMaterno, direccion, telefono, email, password, idRol } = req.body;

        if (!nombre || !email || !password) {
            return res.status(400).json({ message: "Los campos nombre, email y contraseña son requeridos" });
        }

        // 1. Verificamos si el correo ya existe
        const existe = await trabajadorM.getTrabajadorByEmail(email);
        if (existe) {
            return res.status(409).json({ message: "El correo ya está registrado para otro trabajador" });
        }

        // 2. Encriptamos la contraseña
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        // 3. Guardamos enviando el hash en lugar de la contraseña plana
        const nuevo = await trabajadorM.agregarTrabajador({
            nombre, aPaterno, aMaterno, direccion, telefono, email, 
            password: passwordHash, // <--- Aquí inyectamos la contraseña encriptada
            idRol
        });

        res.status(201).json(nuevo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const actualizarTrabajador = async (req, res) => {
    try {
        const { id } = req.params;
        let datosActualizados = { ...req.body };
        
        if (!datosActualizados.nombre || !datosActualizados.email) {
            return res.status(400).json({ message: "Los campos nombre y email son requeridos para actualizar" });
        }

        // Si el usuario escribió una contraseña nueva, la encriptamos
        if (datosActualizados.password) {
            const salt = await bcrypt.genSalt(10);
            datosActualizados.password = await bcrypt.hash(datosActualizados.password, salt);
        } else {
            // Si la dejó vacía, buscamos la que ya tenía en la BD para no borrarla
            const trabajadorActual = await trabajadorM.getTrabajadorById(id);
            if (!trabajadorActual) return res.status(404).json({ message: "Trabajador no encontrado" });
            
            datosActualizados.password = trabajadorActual.password;
        }

        const filasAfectadas = await trabajadorM.actualizarTrabajador(id, datosActualizados);
        
        if (filasAfectadas === 0) {
            return res.status(404).json({ message: "Trabajador no encontrado para actualizar" });
        }
        
        res.status(200).json({ message: "Trabajador actualizado correctamente", idTrabajador: id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const eliminarTrabajador = async (req, res) => {
    try {
        const { id } = req.params;
        const filasAfectadas = await trabajadorM.eliminarTrabajador(id);
        
        if (filasAfectadas === 0) {
            return res.status(404).json({ message: "Trabajador no encontrado para eliminar" });
        }
        
        res.status(200).json({ message: "Trabajador eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};