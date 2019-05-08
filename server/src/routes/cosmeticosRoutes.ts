import { Router }  from 'express'; // Es un objeto

import cosmeticosController from '../controllers/cosmeticosController';

class CosmeticosRoutes {
    public router: Router = Router();  // objeto router

    constructor() {
        this.config();
    }

    config(): void { // son todas rutas a partir de /api/cosmeticos
        this.router.get('/', cosmeticosController.list); // Creando ruta inicial, te da todos los cosmeticos
        this.router.get('/:id', cosmeticosController.getOne);
        this.router.post('/', cosmeticosController.create);
        this.router.put('/:id', cosmeticosController.update);
        this.router.delete('/:id', cosmeticosController.delete);
    }
}

const cosmeticosRoutes = new CosmeticosRoutes();
export default cosmeticosRoutes.router;