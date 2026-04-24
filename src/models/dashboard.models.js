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

// === NUEVA FUNCIÓN: Obtener los clientes iniciales (Enero 2024) ===
export const getClientesIniciales = async () => {
    const query = `
        SELECT 
            idCliente, nombre, 
            aPaterno, aMaterno, 
            fecha_registro
        FROM tblclientes
        WHERE fecha_registro >= '2024-01-01 00:00:00' 
          AND fecha_registro <= '2024-01-31 23:59:59'
        ORDER BY idCliente ASC;
    `;
    const [rows] = await db.query(query);
    return rows;
};
export const getClientesPorRango = async (fechaInicio, fechaFin) => {
    const query = `
        SELECT COUNT(*) AS total_clientes
        FROM tblclientes 
        WHERE fecha_registro >= ? 
          AND fecha_registro <= ?;
    `;
    // Le pasamos las fechas dinámicas a la consulta SQL
    const [rows] = await db.query(query, [fechaInicio, fechaFin]);
    return rows[0];
};