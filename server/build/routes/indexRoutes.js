"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); // Es un objeto
const indexController_1 = require("../controllers/indexController"); // { } porque solo importas lo que se exportó
class IndexRoutes {
    constructor() {
        this.router = express_1.Router(); // objeto router
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.indexController.index); // Creando ruta inicial. Cuando se entre se ejecuta el codigo de .index
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
