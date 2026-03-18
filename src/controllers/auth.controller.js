import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as clienteModel from '../models/clientes.models.js';
import * as trabajadorModel from '../models/trabajadores.models.js';

// LOGIN PARA CLIENTES (Tienda/Web Pública)
export const loginCliente = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const cliente = await clienteModel.getClienteByEmail(email);
        if (!cliente) return res.status(401).json({ message: 'Credenciales inválidas' });

        const esValida = await bcrypt.compare(password, cliente.password);
        if (!esValida) return res.status(401).json({ message: 'Credenciales inválidas' });

        const token = jwt.sign(
            { id: cliente.idCliente, email: cliente.email, tipo: 'cliente' },
            process.env.JWT_SECRET,
            { expiresIn: '8h' }
        );

        res.json({ token, usuario: { id: cliente.idCliente, nombre: cliente.nombre, tipo: 'cliente' } });
    } catch (error) {
        res.status(500).json({ error: 'Error en el proceso de login' });
    }
};

// LOGIN PARA TRABAJADORES (Panel de Administración)
export const loginTrabajador = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const trabajador = await trabajadorModel.getTrabajadorByEmail(email);
        if (!trabajador) return res.status(401).json({ message: 'Credenciales inválidas' });

        const esValida = await bcrypt.compare(password, trabajador.password);
        if (!esValida) return res.status(401).json({ message: 'Credenciales inválidas' });

        const token = jwt.sign(
            { id: trabajador.idTrabajador, email: trabajador.email, rol: trabajador.idRol, tipo: 'trabajador' },
            process.env.JWT_SECRET,
            { expiresIn: '8h' }
        );

        res.json({ token, usuario: { id: trabajador.idTrabajador, nombre: trabajador.nombre, rol: trabajador.idRol, tipo: 'trabajador' } });
    } catch (error) {
        res.status(500).json({ error: 'Error en el proceso de login' });
    }
};