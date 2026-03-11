import * as videoM from "../models/videos.models.js";

export const getAllVideos = async (req, res) => {
    try {
        const videos = await videoM.getAllVideos();
        res.status(200).json(videos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};