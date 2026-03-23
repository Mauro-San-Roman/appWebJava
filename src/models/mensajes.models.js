const db = require("../config/DB.js");

const getAllMensajes = async () => { 
    const [rows] = await db.query("SELECT * FROM tbl_mensajes ORDER BY id DESC"); 
    return rows; 
};

const agregarMensaje = async ({ nombre, correo, telefono, asunto, mensaje, tipo_mensaje, estado_mensaje, id_mensaje_padre }) => {
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

const eliminarMensaje = async (id) => { 
    const [result] = await db.query("DELETE FROM tbl_mensajes WHERE id = ?", [id]); 
    return result.affectedRows; 
};

const actualizarMensaje = async (id, { estado_mensaje }) => {
    const [result] = await db.query("UPDATE tbl_mensajes SET estado_mensaje = ? WHERE id = ?", [estado_mensaje, id]);
    return result.affectedRows;
};

// Exportamos las funciones
module.exports = {
    getAllMensajes,
    agregarMensaje,
    eliminarMensaje,
    actualizarMensaje
};