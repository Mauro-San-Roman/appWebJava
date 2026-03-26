import db from '../config/DB.js'; 

export const getTotales = async () => {
    const query = `
        SELECT 
            (SELECT COUNT(*) FROM tblproductos) AS total_productos,
            (SELECT COUNT(*) FROM tblclientes) AS total_clientes,
            (SELECT COUNT(*) FROM tblregistro) AS total_registros;
    `;
    const [rows] = await db.query(query);
    return rows[0];
};

export const getStockBajo = async () => {
    const query = `
        SELECT nombre, stock 
        FROM tblproductos 
        WHERE CAST(stock AS UNSIGNED) <= 5;
    `;
    const [rows] = await db.query(query);
    return rows; 
};