import { Router }  from 'express'; // Es un objeto

import serviciosController from '../controllers/serviciosController';

class ServiciosRoutes {
    public router: Router = Router();  // objeto router

    constructor() {
        this.config();
    }

    config(): void { // son todas rutas a partir de /api/servicios
        this.router.get('/', serviciosController.list); // Creando ruta inicial, te da todos los servicios
        this.router.get('/:id', serviciosController.getOne);
    }
}

const serviciosRoutes = new ServiciosRoutes();
export default serviciosRoutes.router;