"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database")); // Traer base de datos
class EmpleadosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empleados = yield database_1.default.query('SELECT * FROM empleados');
            res.json(empleados);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; // deestructuracion
            const empleados = yield database_1.default.query('SELECT * FROM empleados WHERE dni = ?', [id]);
            if (empleados.length > 0) {
                return res.json(empleados[0]);
            }
            // Devolverlo al cliente
            res.status(404).json({ text: "El empleado no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body); // angular envia los datos a traves de este req.body. Puedes ver los datos en la consola. 
            yield database_1.default.query('INSERT INTO empleados SET ?', [req.body]);
            //  Cuando termine lo de arriba, continua 
            res.json({ message: 'Empleado guardado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; // deestructuracion
            yield database_1.default.query('UPDATE empleados SET ? WHERE dni = ?', [req.body, id]);
            res.json({ message: 'El empleado fue actualizado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; // deestructuracion
            yield database_1.default.query('DELETE FROM empleados WHERE dni = ?', [id]);
            res.json({ message: 'El empleado fue eliminado' });
        });
    }
}
const empleadosController = new EmpleadosController();
exports.default = empleadosController;
