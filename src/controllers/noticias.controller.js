import * as noticiaM from "../models/noticias.models.js";

export const getAllNoticias = async (req, res) => {
    try {
        const noticias = await noticiaM.getAllNoticias();
        res.status(200).json(noticias);
    } catch (error) { res.status(500).json({ error: error.message }); }
};
export const agregarNoticia = async (req, res) => {
    try {
        if (!req.body.titulo || !req.body.descripcion) return res.status(400).json({ message: "Título y descripción requeridos" });
        const nuevo = await noticiaM.agregarNoticia(req.body);
        res.status(201).json(nuevo);
    } catch (error) { res.status(500).json({ error: error.message }); }
};
export const actualizarNoticia = async (req, res) => {
    try {
        if (!req.body.titulo || !req.body.descripcion) return res.status(400).json({ message: "Título y descripción requeridos" });
        const filas = await noticiaM.actualizarNoticia(req.params.id, req.body);
        if (filas === 0) return res.status(404).json({ message: "Noticia no encontrada" });
        res.status(200).json({ message: "Noticia actualizada", id: req.params.id });
    } catch (error) { res.status(500).json({ error: error.message }); }
};
export const eliminarNoticia = async (req, res) => {
    try {
        const filas = await noticiaM.eliminarNoticia(req.params.id);
        if (filas === 0) return res.status(404).json({ message: "Noticia no encontrada" });
        res.status(200).json({ message: "Noticia eliminada" });
    } catch (error) { res.status(500).json({ error: error.message }); }
};