"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); // Es un objeto
const ventasController_1 = __importDefault(require("../controllers/ventasController"));
class VentasRoutes {
    constructor() {
        this.router = express_1.Router(); // objeto router
        this.config();
    }
    config() {
        this.router.get('/', ventasController_1.default.list); // Creando ruta inicial, te da todos las ventas
        this.router.get('/:id', ventasController_1.default.getOne);
    }
}
const ventasRoutes = new VentasRoutes();
exports.default = ventasRoutes.router;
