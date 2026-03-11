import db from "../config/DB.js";

export const getInicioById = async (id) => { const [rows] = await db.query("SELECT * FROM tbl_inicio WHERE id = ?", [id]); return rows[0]; };
export const actualizarInicio = async (id, { titulo, descripcion, texto_boton, imagen_fondo, video_url }) => {
    const [result] = await db.query(
        "UPDATE tbl_inicio SET titulo = ?, descripcion = ?, texto_boton = ?, imagen_fondo = ?, video_url = ? WHERE id = ?",
        [titulo, descripcion, texto_boton, imagen_fondo, video_url, id]
    );
    return result.affectedRows;
};