"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); // Es un objeto
const citasController_1 = __importDefault(require("../controllers/citasController"));
class CitasRoutes {
    constructor() {
        this.router = express_1.Router(); // objeto router
        this.config();
    }
    config() {
        this.router.get('/', citasController_1.default.list); // Creando ruta inicial, te da todos las citas
        this.router.get('/:id', citasController_1.default.getOne);
        this.router.post('/', citasController_1.default.create);
        this.router.put('/:id', citasController_1.default.update);
        this.router.delete('/:id', citasController_1.default.delete);
    }
}
const citasRoutes = new CitasRoutes();
exports.default = citasRoutes.router;
