import { Router }  from 'express'; // Es un objeto

import empleadosController from '../controllers/empleadosController';

class EmpleadosRoutes {
    public router: Router = Router();  // objeto router

    constructor() {
        this.config();
    }

    config(): void { // son todas rutas a partir de /api/empleados
        this.router.get('/', empleadosController.list); // Creando ruta inicial, te da todos los empleados
        this.router.get('/:id', empleadosController.getOne);
        this.router.post('/', empleadosController.create);
        this.router.put('/:id', empleadosController.update);
        this.router.delete('/:id', empleadosController.delete);
    }
}

const empleadosRoutes = new EmpleadosRoutes();
export default empleadosRoutes.router;