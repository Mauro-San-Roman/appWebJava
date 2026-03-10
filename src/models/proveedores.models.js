import db from "../config/DB.js";

export const getAllProveedores = async () => {
    const [rows] = await db.query("SELECT * FROM tblProvedores");
    return rows;
};

export const getProveedorById = async (id) => {
    const [rows] = await db.query("SELECT * FROM tblProvedores WHERE id = ?", [id]);
    return rows[0];
};

export const agregarProveedor = async ({ nombre, logo_url, sitio_web }) => {
    const [result] = await db.query(
        "INSERT INTO tblProvedores (nombre, logo_url, sitio_web) VALUES (?, ?, ?)",
        [nombre, logo_url || null, sitio_web || null]
    );
    return { id: result.insertId, nombre };
};

export const actualizarProveedor = async (id, { nombre, logo_url, sitio_web }) => {
    const [result] = await db.query(
        "UPDATE tblProvedores SET nombre = ?, logo_url = ?, sitio_web = ? WHERE id = ?",
        [nombre, logo_url || null, sitio_web || null, id]
    );
    return result.affectedRows; 
};

export const eliminarProveedor = async (id) => {
    const [result] = await db.query("DELETE FROM tblProvedores WHERE id = ?", [id]);
    return result.affectedRows;
};