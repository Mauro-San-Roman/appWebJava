import db from '../config/DB.js';

export const getAllClientes = async () => {
    const [rows] = await db.query("SELECT * FROM tblclientes");
    return rows;
};

export const getClienteById = async (id) => {
    const [rows] = await db.query("SELECT * FROM tblclientes WHERE idCliente = ?", [id]);
    return rows[0];
};

// NUEVO: Función vital para el Login de Clientes
export const getClienteByEmail = async (email) => {
    const [rows] = await db.query("SELECT * FROM tblclientes WHERE email = ?", [email]);
    return rows[0];
};

export const agregarCliente = async ({ nombre, aPaterno, aMaterno, telefono, direccion, email, password }) => {
    const [result] = await db.query(
        "INSERT INTO tblclientes (nombre, aPaterno, aMaterno, telefono, direccion, email, password) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [nombre, aPaterno, aMaterno, telefono, direccion, email, password]
    );
    return { id: result.insertId, nombre, email };
};

export const actualizarCliente = async (id, { nombre, aPaterno, aMaterno, telefono, direccion, email, password }) => {
    const [result] = await db.query(
        "UPDATE tblclientes SET nombre = ?, aPaterno = ?, aMaterno = ?, telefono = ?, direccion = ?, email = ?, password = ? WHERE idCliente = ?",
        [nombre, aPaterno, aMaterno, telefono, direccion, email, password, id]
    );
    return result.affectedRows; 
};

export const eliminarCliente = async (id) => {
    const [result] = await db.query("DELETE FROM tblclientes WHERE idCliente = ?", [id]);
    return result.affectedRows;
};