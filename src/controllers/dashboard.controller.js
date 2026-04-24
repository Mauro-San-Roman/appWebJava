import * as DashboardModel from '../models/dashboard.models.js';

// Controlador para los totales
export const obtenerTotales = async (req, res) => {
    try {
        const totales = await DashboardModel.getTotales();
        res.status(200).json(totales);
    } catch (error) {
        console.error("Error al obtener los totales:", error);
        res.status(500).json({ message: "Error al obtener la información del dashboard" });
    }
};

// Controlador para el stock bajo
export const obtenerStockBajo = async (req, res) => {
    try {
        const productos = await DashboardModel.getStockBajo();
        res.status(200).json(productos);
    } catch (error) {
        console.error("Error al obtener el stock:", error);
        res.status(500).json({ message: "Error al obtener las alertas de stock" });
    }
};

//Controolador para los clientes iniciales
export const obtenerClientesIniciales = async (req, res) => {
    try {
        const clientes = await DashboardModel.getClientesIniciales();
        res.status(200).json(clientes);
    } catch (error) {
        console.error("Error al obtener los clientes iniciales:", error);
        res.status(500).json({ message: "Error al obtener los clientes iniciales" });
    }
};
export const obtenerClientesPorRango = async (req, res) => {
    try {
        // Recibimos las fechas desde la URL (query params)
        const { inicio, fin } = req.query;
        
        if (!inicio || !fin) {
            return res.status(400).json({ message: "Las fechas de inicio y fin son obligatorias" });
        }

        const resultado = await DashboardModel.getClientesPorRango(inicio, fin);
        res.status(200).json(resultado);
    } catch (error) {
        console.error("Error al obtener clientes por rango:", error);
        res.status(500).json({ message: "Error al consultar la base de datos" });
    }
};