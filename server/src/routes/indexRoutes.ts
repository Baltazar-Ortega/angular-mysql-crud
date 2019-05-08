
import { Router }  from 'express'; // Es un objeto

import { indexController } from '../controllers/indexController'; // { } porque solo importas lo que se exportó

class IndexRoutes {
    public router: Router = Router();  // objeto router

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', indexController.index); // Creando ruta inicial. Cuando se entre se ejecuta el codigo de .index
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;


