"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); // Es un objeto
const clientesController_1 = __importDefault(require("../controllers/clientesController"));
class ClientesRoutes {
    constructor() {
        this.router = express_1.Router(); // objeto router
        this.config();
    }
    config() {
        this.router.get('/', clientesController_1.default.list); // Creando ruta inicial, te da todos los clientes
        this.router.get('/:id', clientesController_1.default.getOne);
        this.router.post('/', clientesController_1.default.create);
        this.router.put('/:id', clientesController_1.default.update);
        this.router.delete('/:id', clientesController_1.default.delete);
    }
}
const clientesRoutes = new ClientesRoutes();
exports.default = clientesRoutes.router;
