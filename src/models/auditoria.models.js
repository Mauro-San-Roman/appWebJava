import db from "../config/DB.js";

export const getAllAuditoria = async () => {
    const [rows] = await db.query("SELECT * FROM tbl_auditoria_sistema ORDER BY fecha_registro DESC");
    return rows;
};