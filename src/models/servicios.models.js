import db from "../config/DB.js";

export const getAllServicios = async () => {
    const [rows] = await db.query("SELECT * FROM tbl_servicios");
    return rows;
};

export const getServicioById = async (id) => {
    const [rows] = await db.query("SELECT * FROM tbl_servicios WHERE id = ?", [id]);
    return rows[0];
};

export const agregarServicio = async ({ titulo, descripcion, imagen }) => {
    const [result] = await db.query(
        "INSERT INTO tbl_servicios (titulo, descripcion, imagen) VALUES (?, ?, ?)",
        [titulo, descripcion, imagen || null]
    );
    return { id: result.insertId, titulo };
};

export const actualizarServicio = async (id, { titulo, descripcion, imagen }) => {
    const [result] = await db.query(
        "UPDATE tbl_servicios SET titulo = ?, descripcion = ?, imagen = ? WHERE id = ?",
        [titulo, descripcion, imagen || null, id]
    );
    return result.affectedRows; 
};

export const eliminarServicio = async (id) => {
    const [result] = await db.query("DELETE FROM tbl_servicios WHERE id = ?", [id]);
    return result.affectedRows;
};