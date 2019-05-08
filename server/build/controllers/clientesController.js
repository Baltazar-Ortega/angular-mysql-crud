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
class ClientesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const clientes = yield database_1.default.query('SELECT * FROM clientes');
            res.json(clientes);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; // deestructuracion
            const clientes = yield database_1.default.query('SELECT * FROM clientes WHERE dni = ?', [id]);
            if (clientes.length > 0) {
                return res.json(clientes[0]);
            }
            // Devolverlo al cliente
            res.status(404).json({ text: "El cliente no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body); // angular envia los datos a traves de este req.body. Puedes ver los datos en la consola. 
            yield database_1.default.query('INSERT INTO clientes SET ?', [req.body]);
            //  Cuando termine lo de arriba, continua 
            res.json({ message: 'Cliente guardado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; // deestructuracion
            yield database_1.default.query('UPDATE clientes SET ? WHERE dni = ?', [req.body, id]);
            res.json({ message: 'El cliente fue actualizado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; // deestructuracion
            yield database_1.default.query('DELETE FROM clientes WHERE dni = ?', [id]);
            res.json({ message: 'El cliente fue eliminado' });
        });
    }
}
const clientesController = new ClientesController();
exports.default = clientesController;
