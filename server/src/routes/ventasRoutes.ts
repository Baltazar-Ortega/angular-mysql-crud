import { Router }  from 'express'; // Es un objeto

import ventasController from '../controllers/ventasController';

class VentasRoutes {
    public router: Router = Router();  // objeto router

    constructor() {
        this.config();
    }

    config(): void { // son todas rutas a partir de /api/ventas
        this.router.get('/', ventasController.list); // Creando ruta inicial, te da todos las ventas
        this.router.get('/:id', ventasController.getOne);
    }
}

const ventasRoutes = new VentasRoutes();
export default ventasRoutes.router;