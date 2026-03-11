import db from "../config/DB.js";

export const getAllNoticias = async () => {
    const [rows] = await db.query("SELECT * FROM tbl_noticias ORDER BY fecha DESC");
    return rows;
};
export const agregarNoticia = async ({ titulo, descripcion, imagen, fecha }) => {
    const [result] = await db.query(
        "INSERT INTO tbl_noticias (titulo, descripcion, imagen, fecha) VALUES (?, ?, ?, ?)",
        [titulo, descripcion, imagen || null, fecha]
    );
    return { id: result.insertId, titulo };
};
export const actualizarNoticia = async (id, { titulo, descripcion, imagen, fecha }) => {
    const [result] = await db.query(
        "UPDATE tbl_noticias SET titulo = ?, descripcion = ?, imagen = ?, fecha = ? WHERE id = ?",
        [titulo, descripcion, imagen || null, fecha, id]
    );
    return result.affectedRows;
};
export const eliminarNoticia = async (id) => {
    const [result] = await db.query("DELETE FROM tbl_noticias WHERE id = ?", [id]);
    return result.affectedRows;
};