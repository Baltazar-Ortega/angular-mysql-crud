import { Router }  from 'express'; // Es un objeto

import citasController from '../controllers/citasController';

class CitasRoutes {
    public router: Router = Router();  // objeto router

    constructor() {
        this.config();
    }

    config(): void { // son todas rutas a partir de /api/citas
        this.router.get('/', citasController.list); // Creando ruta inicial, te da todos las citas
        this.router.get('/:id', citasController.getOne);
        this.router.post('/', citasController.create);
        this.router.put('/:id', citasController.update);
        this.router.delete('/:id', citasController.delete);
    }
}

const citasRoutes = new CitasRoutes();
export default citasRoutes.router;