import db from "../config/DB.js";

export const getAllClientes = async () => {
    const [rows] = await db.query("SELECT * FROM tblclientes");
    return rows;
};

export const getClienteById = async (id) => {
    const [rows] = await db.query( "SELECT * FROM tblclientes WHERE idCliente = ?",[id]);
    return rows[0];
};

export const agregarCliente = async ({nombre, aPaterno, aMaterno, telefono, direccion, email}) => {
    const [result] = await db.query(
        "INSERT INTO tblclientes (nombre, aPaterno, aMaterno, telefono, direccion, email) VALUES (?, ?, ?, ?, ?, ?)",
        [nombre, aPaterno, aMaterno, telefono, direccion, email]
    );
    return { id: result.insertId, nombre };
};

export const actualizarCliente = async (id, { nombre, aPaterno, aMaterno, telefono, direccion, email }) => {
    const [result] = await db.query(
        "UPDATE tblclientes SET nombre = ?, aPaterno = ?, aMaterno = ?, telefono = ?, direccion = ?, email = ? WHERE idCliente = ?",
        [nombre, aPaterno, aMaterno, telefono, direccion, email, id]
    );
    return result.affectedRows; 
};

export const eliminarCliente = async (id) => {
    const [result] = await db.query("DELETE FROM tblclientes WHERE idCliente = ?", [id]);
    return result.affectedRows;
};