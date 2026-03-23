import db from "../config/DB.js";

export const obtenerMensajes = async () => { 
    const [rows] = await db.query("SELECT * FROM tbl_mensajes ORDER BY id DESC"); 
    return rows; 
};

export const crearMensaje = async ({correo, asunto, mensaje, tipo_mensaje, estado_mensaje, id_mensaje_padre }) => {
    const tipo = tipo_mensaje || 'ENTRANTE';
    const estado = estado_mensaje || 'PENDIENTE';
    const padre = id_mensaje_padre || null;

    const query = `
        INSERT INTO tbl_mensajes 
        (correo, asunto, mensaje, tipo_mensaje, estado_mensaje, id_mensaje_padre) 
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    const [result] = await db.query(query, [ correo, asunto, mensaje, tipo, estado, padre]);
    return { id: result.insertId, correo };
};

export const borrarMensaje = async (id) => { 
    const [result] = await db.query("DELETE FROM tbl_mensajes WHERE id = ?", [id]); 
    return result.affectedRows; 
};

export const modificarMensaje = async (id, { estado_mensaje }) => {
    const [result] = await db.query("UPDATE tbl_mensajes SET estado_mensaje = ? WHERE id = ?", [estado_mensaje, id]);
    return result.affectedRows;
};