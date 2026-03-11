import db from "../config/DB.js";
export const getAllMensajes = async () => { const [rows] = await db.query("SELECT * FROM tbl_mensajes"); return rows; };
export const agregarMensaje = async ({ correo, asunto, mensaje }) => {
    const [result] = await db.query("INSERT INTO tbl_mensajes (correo, asunto, mensaje) VALUES (?, ?, ?)", [correo, asunto, mensaje]);
    return { id: result.insertId, correo };
};
export const eliminarMensaje = async (id) => { const [result] = await db.query("DELETE FROM tbl_mensajes WHERE id = ?", [id]); return result.affectedRows; };