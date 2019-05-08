import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import citasRoutes from './routes/citasRoutes';
import empleadosRoutes from './routes/empleadosRoutes';
import clientesRoutes from './routes/clientesRoutes';
import cosmeticosRoutes from './routes/cosmeticosRoutes';
import serviciosRoutes from './routes/serviciosRoutes';
import ventasRoutes from './routes/ventasRoutes';

class Server {

    public app: Application;

    constructor() {
      this.app = express();  
      this.config();
      this.routes();
    }

    config():void {
        // Establecer puerto
        // Por ejemplo en heroku te dan un puerto especifico
        // Esto como establecer una variable
        this.app.set('port', process.env.PORT || 3000); // Si existe un puerto, tomalo (sirve si lo subes a la nuba). Si no, el 3000

        this.app.use(morgan('dev')); // en la consola se muestra lo que sucedio. Lo que se pidió
        this.app.use(cors());
        this.app.use(express.json()); // para que express retorne jsons.
        this.app.use(express.urlencoded({extended: false}));  // en caso de que queramos usar formularios de html. Mandar cosas por ahi. 
    }

    routes(): void {
        this.app.use(indexRoutes);
        this.app.use('/api/citas', citasRoutes);
        this.app.use('/api/empleados', empleadosRoutes);
        this.app.use('/api/clientes', clientesRoutes);
        this.app.use('/api/cosmeticos', cosmeticosRoutes);
        this.app.use('/api/servicios', serviciosRoutes);
        this.app.use('/api/ventas', ventasRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();












