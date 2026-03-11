import db from "../config/DB.js";

export const getContacto = async () => { const [rows] = await db.query("SELECT * FROM tbl_contacto LIMIT 1"); return rows[0]; };
export const actualizarContacto = async (id, { email, telefono, whatsapp, direccion, mapa_url }) => {
    const [result] = await db.query(
        "UPDATE tbl_contacto SET email = ?, telefono = ?, whatsapp = ?, direccion = ?, mapa_url = ? WHERE id = ?",
        [email, telefono, whatsapp, direccion, mapa_url, id]
    );
    return result.affectedRows;
};