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
class CosmeticosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cosmeticos = yield database_1.default.query('SELECT * FROM cosmeticos');
            res.json(cosmeticos);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; // deestructuracion
            const cosmeticos = yield database_1.default.query('SELECT * FROM cosmeticos WHERE codigo = ?', [id]);
            if (cosmeticos.length > 0) {
                return res.json(cosmeticos[0]);
            }
            // Devolverlo al cliente
            res.status(404).json({ text: "El cosmetico no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body); // angular envia los datos a traves de este req.body. Puedes ver los datos en la consola. 
            yield database_1.default.query('INSERT INTO cosmeticos SET ?', [req.body]);
            //  Cuando termine lo de arriba, continua 
            res.json({ message: 'Cosmetico guardada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; // deestructuracion
            yield database_1.default.query('UPDATE cosmeticos SET ? WHERE codigo = ?', [req.body, id]);
            res.json({ message: 'el cosmetico fue actualizado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; // deestructuracion
            yield database_1.default.query('DELETE FROM cosmeticos WHERE codigo = ?', [id]);
            res.json({ message: 'El cosmetico fue eliminado' });
        });
    }
}
const cosmeticosController = new CosmeticosController();
exports.default = cosmeticosController;
