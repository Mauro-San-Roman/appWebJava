import db from "../config/DB.js";

export const getAllProductos = async () => {
    const [rows] = await db.query("SELECT * FROM tblproductos");
    return rows;
};

export const getProductoById = async (id) => {
    const [rows] = await db.query( "SELECT * FROM tblproductos WHERE idProducto=?",[id]);
    return rows[0];
};

export const agregarProducto = async ({nombre, stock, precio, descripcion, categoria, imagen_url,}) => {
    const [result] = await db.query(
        "INSERT INTO tblproductos (nombre, stock, precio, descripcion, categoria, imagen_url) VALUES (?,?,?,?,?,?)",
        [nombre, stock, precio, descripcion, categoria, imagen_url || null]
    );
    return { id: result.insertId, nombre };
};

export const actualizarProducto = async (id, { nombre, stock, precio, descripcion, categoria, imagen_url }) => {
    const [result] = await db.query(
        "UPDATE tblproductos SET nombre=?, stock=?, precio=?, descripcion=?, categoria=?, imagen_url=? WHERE idProducto=?",
        [nombre, stock, precio, descripcion, categoria, imagen_url || null, id]
    );
    return result.affectedRows; 
};

export const eliminarProducto = async (id) => {
    const [result] = await db.query('DELETE FROM tblproductos WHERE idProducto=?', [id]);
    return result.affectedRows;
};