// Importa tu conexión a la base de datos (ajusta la ruta según tu proyecto)
const db = require('../config/DB.js'); 

// Consulta 1: Obtener los totales
export const getTotales = async () => {
    const query = `
        SELECT 
            (SELECT COUNT(*) FROM tblproductos) AS total_productos,
            (SELECT COUNT(*) FROM tblclientes) AS total_clientes,
            (SELECT COUNT(*) FROM tblregistro) AS total_registros;
    `;
    const [rows] = await db.query(query);
    return rows[0]; // Retornamos solo el primer objeto con los 3 totales
};

// Consulta 2: Obtener productos con stock bajo
export const getStockBajo = async () => {
    const query = `
        SELECT nombre, stock 
        FROM tblproductos 
        WHERE CAST(stock AS UNSIGNED) <= 5;
    `;
    const [rows] = await db.query(query);
    return rows; // Retornamos el arreglo (lista) de productos
};