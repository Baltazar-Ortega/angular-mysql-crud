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
class ServiciosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let consulta = "SELECT c.nombre AS 'nombre_cliente', e.nombre AS 'nombre_empleado', s.servicio AS 'servicio', UNIX_TIMESTAMP(s.fecha_hora) AS 'fecha_hora' FROM servicios s JOIN clientes c ON c.dni = s.dni_cliente JOIN empleados e ON e.dni = s.dni_empleado ORDER BY s.id";
            const servicios = yield database_1.default.query(consulta);
            /* SELECT c.nombre AS 'nombre_cliente', e.nombre AS 'nombre_empleado', s.servicio AS 'servicio', s.fecha_hora AS 'fecha_hora'
            FROM servicios s
            JOIN clientes c ON c.dni = s.dni_cliente
            JOIN empleados e ON e.dni = s.dni_empleado
            ORDER BY s.id;   */
            res.json(servicios);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; // deestructuracion
            const servicios = yield database_1.default.query('SELECT * FROM servicios WHERE id = ?', [id]);
            if (servicios.length > 0) {
                return res.json(servicios[0]);
            }
            // Devolverlo al cliente
            res.status(404).json({ text: "El servicio no existe" });
        });
    }
}
const serviciosController = new ServiciosController();
exports.default = serviciosController;
