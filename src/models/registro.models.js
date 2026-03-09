import db from "../config/DB.js";

export const getAllRegistro = async () => {
    const [rows] = await db.query("SELECT * FROM tblregistro");
    return rows;
};

export const getRegistroById = async (id) => {
    const [rows] = await db.query("SELECT * FROM tblregistro WHERE idFolio = ?", [id]);
    return rows[0];
};

export const agregarRegistro = async ({ fechaIngreso, estadoEquipo, detalles, diagnostico, costo, idDispositivo, idCliente, idTecnico }) => {
    const [result] = await db.query(
        "INSERT INTO tblregistro (fechaIngreso, estadoEquipo, detalles, diagnostico, costo, idDispositivo, idCliente, idTecnico) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [fechaIngreso, estadoEquipo, detalles, diagnostico, costo || 0, idDispositivo, idCliente, idTecnico]
    );
    return { folio: result.insertId, estadoEquipo };
};

export const actualizarRegistro = async (id, { fechaIngreso, estadoEquipo, detalles, diagnostico, costo, idDispositivo, idCliente, idTecnico }) => {
    const [result] = await db.query(
        "UPDATE tblregistro SET fechaIngreso = ?, estadoEquipo = ?, detalles = ?, diagnostico = ?, costo = ?, idDispositivo = ?, idCliente = ?, idTecnico = ? WHERE idFolio = ?",
        [fechaIngreso, estadoEquipo, detalles, diagnostico, costo || 0, idDispositivo, idCliente, idTecnico, id]
    );
    return result.affectedRows; 
};

export const eliminarRegistro = async (id) => {
    const [result] = await db.query("DELETE FROM tblregistro WHERE idFolio = ?", [id]);
    return result.affectedRows;
};