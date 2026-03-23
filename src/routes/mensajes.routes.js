import { Router } from 'express';
import * as ctrl from '../controllers/mensajes.controller.js';

const router = Router();

// Definición de endpoints para Mensajes
router.get('/', ctrl.getAllMensajes);
router.post('/', ctrl.agregarMensaje);
router.delete('/:id', ctrl.eliminarMensaje);
router.put('/:id', modificarMensaje);

export default router;import db from "../config/DB.js";

export const getAllMensajes = async () => { 
    // Agregamos un ORDER BY para que los más nuevos salgan arriba
    const [rows] = await db.query("SELECT * FROM tbl_mensajes ORDER BY id DESC"); 
    return rows; 
};

export const agregarMensaje = async ({ nombre, correo, telefono, asunto, mensaje, tipo_mensaje, estado_mensaje, id_mensaje_padre }) => {
    // Ponemos valores por defecto para que no explote cuando un cliente escriba desde la página pública
    const tipo = tipo_mensaje || 'ENTRANTE';
    const estado = estado_mensaje || 'PENDIENTE';
    const padre = id_mensaje_padre || null;
    const nom = nombre || 'Desconocido';
    const tel = telefono || 'Sin teléfono';

    const query = `
        INSERT INTO tbl_mensajes 
        (nombre, correo, telefono, asunto, mensaje, tipo_mensaje, estado_mensaje, id_mensaje_padre) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const [result] = await db.query(query, [nom, correo, tel, asunto, mensaje, tipo, estado, padre]);
    return { id: result.insertId, correo };
};

export const eliminarMensaje = async (id) => { 
    const [result] = await db.query("DELETE FROM tbl_mensajes WHERE id = ?", [id]); 
    return result.affectedRows; 
};

// NUEVA FUNCIÓN: Para el PUT que cambia el estado a "RESPONDIDO"
export const actualizarMensaje = async (id, { estado_mensaje }) => {
    const [result] = await db.query("UPDATE tbl_mensajes SET estado_mensaje = ? WHERE id = ?", [estado_mensaje, id]);
    return result.affectedRows;
};