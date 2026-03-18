import db from '../config/DB.js';

//PARA CLIENTES
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

//PARA TRABAJADORES

export const agregarTrabajador = async ({ nombre, aPaterno, aMaterno, direccion, telefono, email, password, idRol }) => {
    const [result] = await db.query(
        "INSERT INTO tbltrabajadores (nombre, aPaterno, aMaterno, direccion, telefono, email, password, idRol) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [nombre, aPaterno, aMaterno, direccion, telefono, email, password, idRol]
    );
    return { id: result.insertId, nombre, email };
};

export const actualizarTrabajador = async (id, { nombre, aPaterno, aMaterno, direccion, telefono, email, password, idRol }) => {
    const [result] = await db.query(
        "UPDATE tbltrabajadores SET nombre = ?, aPaterno = ?, aMaterno = ?, direccion = ?, telefono = ?, email = ?, password = ?, idRol = ? WHERE idTrabajador = ?",
        [nombre, aPaterno, aMaterno, direccion, telefono, email, password, idRol, id]
    );
    return result.affectedRows; 
};

export const eliminarTrabajador = async (id) => {
    const [result] = await db.query("DELETE FROM tbltrabajadores WHERE idTrabajador = ?", [id]);
    return result.affectedRows;
};