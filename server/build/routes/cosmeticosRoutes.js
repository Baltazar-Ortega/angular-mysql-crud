"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); // Es un objeto
const cosmeticosController_1 = __importDefault(require("../controllers/cosmeticosController"));
class CosmeticosRoutes {
    constructor() {
        this.router = express_1.Router(); // objeto router
        this.config();
    }
    config() {
        this.router.get('/', cosmeticosController_1.default.list); // Creando ruta inicial, te da todos los cosmeticos
        this.router.get('/:id', cosmeticosController_1.default.getOne);
        this.router.post('/', cosmeticosController_1.default.create);
        this.router.put('/:id', cosmeticosController_1.default.update);
        this.router.delete('/:id', cosmeticosController_1.default.delete);
    }
}
const cosmeticosRoutes = new CosmeticosRoutes();
exports.default = cosmeticosRoutes.router;
