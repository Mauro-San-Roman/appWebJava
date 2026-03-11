import db from "../config/DB.js";

export const getAllVideos = async () => {
    const [rows] = await db.query("SELECT * FROM tblVideos");
    return rows;
};