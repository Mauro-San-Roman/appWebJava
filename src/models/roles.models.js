import db from "../config/DB.js";

export const getAllRoles = async () => {
    const [rows] = await db.query("SELECT * FROM tblroles");
    return rows;
};

export const getRolById = async (id) => {
    const [rows] = await db.query("SELECT * FROM tblroles WHERE idRol = ?", [id]);
    return rows[0];
};

export const agregarRol = async ({ nombreRol }) => {
    const [result] = await db.query(
        "INSERT INTO tblroles (nombreRol) VALUES (?)",
        [nombreRol]
    );
    return { idRol: result.insertId, nombreRol };
};

export const actualizarRol = async (id, { nombreRol }) => {
    const [result] = await db.query(
        "UPDATE tblroles SET nombreRol = ? WHERE idRol = ?",
        [nombreRol, id]
    );
    return result.affectedRows; 
};

export const eliminarRol = async (id) => {
    const [result] = await db.query("DELETE FROM tblroles WHERE idRol = ?", [id]);
    return result.affectedRows;
};