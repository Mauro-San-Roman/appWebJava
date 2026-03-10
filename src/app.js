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
//IMPORTACION DE AGENDA
import agendaRoutes from './routes/agenda.routes.js'
//IMPORTACION DE REGISTROS
import registroRoutes from './routes/registro.routes.js'
//IMPORTACION DE TRABAJADORES
import trabajadoresRoutes from './routes/trabajadores.routes.js'
//IMPORTACION DE PROVEEDORES
import proveedoresRoutes from './routes/proveedores.routes.js'
//IMPORTACION DE ROLES
import rolesRoutes from './routes/roles.routes.js'

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
//RUTAS PARA LA AGENDA
app.use('/api/agenda', agendaRoutes);
//RUTAS PARA LOS REGISTROS
app.use('/api/registros', registroRoutes);
//RUTAS PARA LOS TRABAJADORES
app.use('/api/trabajadores', trabajadoresRoutes);
//RUTAS PARA LOS PROVEEDORES
app.use('/api/proveedores', proveedoresRoutes);
//RUTAS PARA LOS ROLES
app.use('/api/roles', rolesRoutes);