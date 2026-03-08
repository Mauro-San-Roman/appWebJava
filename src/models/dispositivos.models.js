import db from "../config/DB.js";

export const getAllDispositivos = async () => {
    const [rows] = await db.query("SELECT * FROM tbldispositivos");
    return rows;
};

export const getDispositivoById = async (id) => {
    const [rows] = await db.query("SELECT * FROM tbldispositivos WHERE idDispositivo = ?", [id]);
    return rows[0];
};

export const agregarDispositivo = async ({ numSerie, modelo, marca, idCliente }) => {
    const [result] = await db.query(
        "INSERT INTO tbldispositivos (numSerie, modelo, marca, idCliente) VALUES (?, ?, ?, ?)",
        [numSerie, modelo, marca, idCliente]
    );
    return { id: result.insertId, modelo, numSerie };
};

export const actualizarDispositivo = async (id, { numSerie, modelo, marca, idCliente }) => {
    const [result] = await db.query(
        "UPDATE tbldispositivos SET numSerie = ?, modelo = ?, marca = ?, idCliente = ? WHERE idDispositivo = ?",
        [numSerie, modelo, marca, idCliente, id]
    );
    return result.affectedRows; 
};

export const eliminarDispositivo = async (id) => {
    const [result] = await db.query("DELETE FROM tbldispositivos WHERE idDispositivo = ?", [id]);
    return result.affectedRows;
};