import db from "../config/DB.js"

export const getAllProductos= async ()=>{
    const [rows]= await db.query("SELECT * FROM tblproductos")
    return rows;
}

export const getProductoById=async ()=>{
    const[rows]=await db.query("SELECT * FROM tblproductos WHERE idProducto=?",[id])
    return rows[0]
}
