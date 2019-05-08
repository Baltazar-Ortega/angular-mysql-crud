"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const citasRoutes_1 = __importDefault(require("./routes/citasRoutes"));
const empleadosRoutes_1 = __importDefault(require("./routes/empleadosRoutes"));
const clientesRoutes_1 = __importDefault(require("./routes/clientesRoutes"));
const cosmeticosRoutes_1 = __importDefault(require("./routes/cosmeticosRoutes"));
const serviciosRoutes_1 = __importDefault(require("./routes/serviciosRoutes"));
const ventasRoutes_1 = __importDefault(require("./routes/ventasRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        // Establecer puerto
        // Por ejemplo en heroku te dan un puerto especifico
        // Esto como establecer una variable
        this.app.set('port', process.env.PORT || 3000); // Si existe un puerto, tomalo (sirve si lo subes a la nuba). Si no, el 3000
        this.app.use(morgan_1.default('dev')); // en la consola se muestra lo que sucedio. Lo que se pidió
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json()); // para que express retorne jsons.
        this.app.use(express_1.default.urlencoded({ extended: false })); // en caso de que queramos usar formularios de html. Mandar cosas por ahi. 
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/citas', citasRoutes_1.default);
        this.app.use('/api/empleados', empleadosRoutes_1.default);
        this.app.use('/api/clientes', clientesRoutes_1.default);
        this.app.use('/api/cosmeticos', cosmeticosRoutes_1.default);
        this.app.use('/api/servicios', serviciosRoutes_1.default);
        this.app.use('/api/ventas', ventasRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
