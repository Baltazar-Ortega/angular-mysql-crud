"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); // Es un objeto
const serviciosController_1 = __importDefault(require("../controllers/serviciosController"));
class ServiciosRoutes {
    constructor() {
        this.router = express_1.Router(); // objeto router
        this.config();
    }
    config() {
        this.router.get('/', serviciosController_1.default.list); // Creando ruta inicial, te da todos los servicios
        this.router.get('/:id', serviciosController_1.default.getOne);
    }
}
const serviciosRoutes = new ServiciosRoutes();
exports.default = serviciosRoutes.router;
