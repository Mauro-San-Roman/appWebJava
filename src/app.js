//! importamos la libreria
import express from 'express'
import dontenv from 'dotenv'
import cors from 'cors'
import productosRoutes from './routes/productos.routes.js'

//! creamos el objeto de espress para nuestra aplicacion
const app = express();

//! Configuro el acceso al archivo .env
dontenv.config();

//! Definimos nuestro puerto de conexion
const port = process.env.PORT || 3000;

//! Implementar un middleware para poder implementar el formato JSON en las solicitudes
app.use(express.json());
app.use(cors())

//! Rutas
app.use('/api/productos', productosRoutes);

app.get('/', (req, res)=> {
    res.send("Esta es un primer API desde express...");
})

app.get('/otra', (req, res)=> {
    res.send("otra ruta");
})

app.listen(port, ()=>{
    console.log(`Aplicacion corriendo en el puerto ${port}`)
})