import db from "../config/DB.js";

export const getAllAgenda = async () => {
    const [rows] = await db.query("SELECT * FROM tblagenda");
    return rows;
};

export const getAgendaById = async (id) => {
    const [rows] = await db.query( "SELECT * FROM tblagenda WHERE idCita = ?",[id]);
    return rows[0];
};

export const agregarAgenda = async ({nombreCitado, aPaterno, aMaterno, telefono, fechaCita, horaCita, detalles_problema}) => {
    const [result] = await db.query(
        "INSERT INTO tblagenda (nombreCitado, aPaterno, aMaterno, telefono, fechaCita, horaCita, detalles_problema) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [nombreCitado, aPaterno, aMaterno, telefono, fechaCita, horaCita, detalles_problema]
    );
    return { id: result.insertId, nombreCitado };
};

export const actualizarAgenda = async (id, { nombreCitado, aPaterno, aMaterno, telefono, fechaCita, horaCita, detalles_problema }) => {
    const [result] = await db.query(
        "UPDATE tblagenda SET nombreCitado = ?, aPaterno = ?, aMaterno = ?, telefono = ?, fechaCita = ?, horaCita = ?, detalles_problema = ? WHERE idCita = ?",
        [nombreCitado, aPaterno, aMaterno, telefono, fechaCita, horaCita, detalles_problema, id]
    );
    return result.affectedRows; 
};

export const eliminarAgenda = async (id) => {
    const [result] = await db.query("DELETE FROM tblagenda WHERE idCita = ?", [id]);
    return result.affectedRows;
};