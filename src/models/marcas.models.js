import db from "../config/DB.js";

export const getAllMarcas = async () => {
    const [rows] = await db.query("SELECT * FROM tbl_marcas");
    return rows;
};

export const getMarcasById = async (id) => {
    const [rows] = await db.query("SELECT * FROM tbl_marcas WHERE id = ?", [id]);
    return rows[0];
};