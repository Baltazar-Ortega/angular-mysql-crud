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
class CitasController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let citasQuery = "SELECT ci.id AS 'id', UNIX_TIMESTAMP(ci.fecha_hora) AS 'fecha_hora', c.nombre AS 'nombre_cliente', e.nombre AS 'nombre_empleado' FROM citas ci JOIN clientes c ON c.dni = ci.dni_cliente JOIN empleados e ON e.dni = ci.dni_empleado ORDER BY ci.id;";
            const citas = yield database_1.default.query(citasQuery);
            /* SELECT ci.fecha_hora AS 'fecha_hora', c.nombre AS 'nombre_cliente', e.nombre AS 'nombre_empleado'
            FROM citas ci
            JOIN clientes c ON c.dni = ci.dni_cliente
            JOIN empleados e ON e.dni = ci.dni_empleado
            ORDER BY ci.id;   */
            res.json(citas);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; // deestructuracion
            const citas = yield database_1.default.query('SELECT * FROM citas WHERE id = ?', [id]);
            if (citas.length > 0) {
                return res.json(citas[0]);
            }
            // Devolverlo al cliente
            res.status(404).json({ text: "La cita no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body); // angular envia los datos a traves de este req.body. Puedes ver los datos en la consola. 
            yield database_1.default.query('INSERT INTO citas SET ?', [req.body]);
            //  Cuando termine lo de arriba, continua 
            res.json({ message: 'Cita guardada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; // deestructuracion
            yield database_1.default.query('UPDATE citas SET ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'La cita fue actualizada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; // deestructuracion
            yield database_1.default.query('DELETE FROM citas WHERE id = ?', [id]);
            res.json({ message: 'La cita fue eliminada' });
        });
    }
}
const citasController = new CitasController();
exports.default = citasController;
