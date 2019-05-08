import { Request, Response } from 'express'; // Pedimos estos tipos de datos

import pool from '../database'; // Traer base de datos

class ServiciosController {

    public async list (req: Request, res: Response) {
        let consulta = "SELECT c.nombre AS 'nombre_cliente', e.nombre AS 'nombre_empleado', s.servicio AS 'servicio', UNIX_TIMESTAMP(s.fecha_hora) AS 'fecha_hora' FROM servicios s JOIN clientes c ON c.dni = s.dni_cliente JOIN empleados e ON e.dni = s.dni_empleado ORDER BY s.id";
        const servicios = await pool.query(consulta);
        /* SELECT c.nombre AS 'nombre_cliente', e.nombre AS 'nombre_empleado', s.servicio AS 'servicio', s.fecha_hora AS 'fecha_hora'
        FROM servicios s
        JOIN clientes c ON c.dni = s.dni_cliente
        JOIN empleados e ON e.dni = s.dni_empleado
        ORDER BY s.id;   */
        res.json(servicios);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params; // deestructuracion
        const servicios = await pool.query('SELECT * FROM servicios WHERE id = ?', [id]);
        if (servicios.length > 0) {
            return res.json(servicios[0]); 
        }
        // Devolverlo al cliente
        res.status(404).json({text: "El servicio no existe"});
    }


}

const serviciosController = new ServiciosController();

export default serviciosController;