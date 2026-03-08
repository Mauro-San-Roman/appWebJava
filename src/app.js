//! importamos la libreria
import express from 'express'
import dontenv from 'dotenv'
import cors from 'cors'
//IMPORTACION DE PRODUCTOS
import productosRoutes from './routes/productos.routes.js'
//IMPORTACION DE CLIENTES
import clientesRoutes from './routes/clientes.routes.js'
//IMPORTACION DE SERVICIOS
import serviciosRoutes from './routes/servicios.routes.js'
//IMPORTACION DE SERVICIOS
import nosotrosRoutes from './routes/nosotros.routes.js'
//IMPORTACION DE SERVICIOS
import dispositivosRoutes from './routes/dispositivos.routes.js'

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

//RUTAS PARA LOS CLIENTES
app.use('/api/clientes', clientesRoutes);
//RUTAS PARA LOS SERVICIOS
app.use('/api/servicios', serviciosRoutes);
//RUTAS PARA LA INFORMACION "NOSOTROS"
app.use('/api/nosotros', nosotrosRoutes);
//RUTAS PARA LOS DISPOSITIVOS
app.use('/api/dispositivos', dispositivosRoutes);