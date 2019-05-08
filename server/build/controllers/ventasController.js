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
class VentasController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let consulta = "SELECT v.comision AS 'comision', e.nombre AS 'nombre_empleado', c.nombre AS 'nombre_cliente', cos.nombre AS 'nombre_cosmetico' FROM ventas v JOIN clientes c ON c.dni = v.dni_cliente JOIN empleados e ON e.dni = v.dni_empleado JOIN cosmeticos cos ON cos.codigo = v.codigo_cosmetico ORDER BY v.id";
            const ventas = yield database_1.default.query(consulta);
            /* SELECT v.comision AS 'comision', e.nombre AS 'nombre_empleado', c.nombre AS 'nombre_cliente', cos.nombre AS 'nombre_cosmetico'
            FROM ventas v
            JOIN clientes c ON c.dni = v.dni_cliente
            JOIN empleados e ON e.dni = v.dni_empleado
            JOIN cosmeticos cos ON cos.codigo = v.codigo_cosmetico
            ORDER BY v.id;   */
            res.json(ventas);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; // deestructuracion
            const ventas = yield database_1.default.query('SELECT * FROM ventas WHERE id = ?', [id]);
            if (ventas.length > 0) {
                return res.json(ventas[0]);
            }
            // Devolverlo al cliente
            res.status(404).json({ text: "El servicio no existe" });
        });
    }
}
const ventasController = new VentasController();
exports.default = ventasController;
