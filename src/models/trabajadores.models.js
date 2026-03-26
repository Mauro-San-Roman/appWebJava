import db from '../config/DB.js';

export const getAllTrabajadores = async () => {
    const [rows] = await db.query("SELECT * FROM tbltrabajadores");
    return rows;
};

export const getTrabajadorById = async (id) => {
    const [rows] = await db.query("SELECT * FROM tbltrabajadores WHERE idTrabajador = ?", [id]);
    return rows[0];
};

export const getTrabajadorByEmail = async (email) => {
    const [rows] = await db.query("SELECT * FROM tbltrabajadores WHERE email = ?", [email]);
    return rows[0];
};

export const agregarTrabajador = async ({ nombre, aPaterno, aMaterno, CPostal, estado, municipio, asentamiento, calle, telefono, email, password, idRol }) => {
    const [result] = await db.query(
        "INSERT INTO tbltrabajadores (nombre, aPaterno, aMaterno, CPostal, estado, municipio, asentamiento, calle, telefono, email, password, idRol) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [nombre, aPaterno, aMaterno, CPostal, estado, municipio, asentamiento, calle, telefono, email, password, idRol]
    );
    return { id: result.insertId, nombre, email };
};

export const actualizarTrabajador = async (id, { nombre, aPaterno, aMaterno, CPostal, estado, municipio, asentamiento, calle, telefono, email, password, idRol }) => {
    const [result] = await db.query(
        "UPDATE tbltrabajadores SET nombre = ?, aPaterno = ?, aMaterno = ?, CPostal = ?, estado = ?, municipio = ?, asentamiento = ?, calle = ?, telefono = ?, email = ?, password = ?, idRol = ? WHERE idTrabajador = ?",
        [nombre, aPaterno, aMaterno, CPostal, estado, municipio, asentamiento, calle, telefono, email, password, idRol, id]
    );
    return result.affectedRows; 
};

export const eliminarTrabajador = async (id) => {
    const [result] = await db.query("DELETE FROM tbltrabajadores WHERE idTrabajador = ?", [id]);
    return result.affectedRows;
};