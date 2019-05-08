import { Router }  from 'express'; // Es un objeto

import clientesController from '../controllers/clientesController';

class ClientesRoutes {
    public router: Router = Router();  // objeto router

    constructor() {
        this.config();
    }

    config(): void { // son todas rutas a partir de /api/clientes
        this.router.get('/', clientesController.list); // Creando ruta inicial, te da todos los clientes
        this.router.get('/:id', clientesController.getOne);
        this.router.post('/', clientesController.create);
        this.router.put('/:id', clientesController.update);
        this.router.delete('/:id', clientesController.delete);
    }
}

const clientesRoutes = new ClientesRoutes();
export default clientesRoutes.router;