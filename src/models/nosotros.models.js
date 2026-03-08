import db from "../config/DB.js";

export const getAllNosotros = async () => {
    const [rows] = await db.query("SELECT * FROM tblNosotros");
    return rows;
};

export const getNosotrosById = async (id) => {
    const [rows] = await db.query("SELECT * FROM tblNosotros WHERE idInfo = ?", [id]);
    return rows[0];
};

export const agregarNosotros = async ({ titulo, descripcion, imagen }) => {
    const [result] = await db.query(
        "INSERT INTO tblNosotros (titulo, descripcion, imagen) VALUES (?, ?, ?)",
        [titulo, descripcion, imagen || null]
    );
    return { id: result.insertId, titulo };
};

export const actualizarNosotros = async (id, { titulo, descripcion, imagen }) => {
    const [result] = await db.query(
        "UPDATE tblNosotros SET titulo = ?, descripcion = ?, imagen = ? WHERE idInfo = ?",
        [titulo, descripcion, imagen || null, id]
    );
    return result.affectedRows; 
};

export const eliminarNosotros = async (id) => {
    const [result] = await db.query("DELETE FROM tblNosotros WHERE idInfo = ?", [id]);
    return result.affectedRows;
};