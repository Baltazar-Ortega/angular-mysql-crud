import { Request, Response } from 'express'; // Pedimos estos tipos de datos

import pool from '../database'; // Traer base de datos

class VentasController {

    public async list (req: Request, res: Response) {
        let consulta = "SELECT v.comision AS 'comision', e.nombre AS 'nombre_empleado', c.nombre AS 'nombre_cliente', cos.nombre AS 'nombre_cosmetico' FROM ventas v JOIN clientes c ON c.dni = v.dni_cliente JOIN empleados e ON e.dni = v.dni_empleado JOIN cosmeticos cos ON cos.codigo = v.codigo_cosmetico ORDER BY v.id";
        const ventas = await pool.query(consulta);
        /* SELECT v.comision AS 'comision', e.nombre AS 'nombre_empleado', c.nombre AS 'nombre_cliente', cos.nombre AS 'nombre_cosmetico'
        FROM ventas v
        JOIN clientes c ON c.dni = v.dni_cliente
        JOIN empleados e ON e.dni = v.dni_empleado
        JOIN cosmeticos cos ON cos.codigo = v.codigo_cosmetico
        ORDER BY v.id;   */
        res.json(ventas);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params; // deestructuracion
        const ventas = await pool.query('SELECT * FROM ventas WHERE id = ?', [id]);
        if (ventas.length > 0) {
            return res.json(ventas[0]); 
        }
        // Devolverlo al cliente
        res.status(404).json({text: "El servicio no existe"});
    }


}

const ventasController = new VentasController();

export default ventasController;