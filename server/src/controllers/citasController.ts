import { Request, Response } from 'express'; // Pedimos estos tipos de datos

import pool from '../database'; // Traer base de datos

class CitasController {

    public async list (req: Request, res: Response) {
        let citasQuery = "SELECT ci.id AS 'id', UNIX_TIMESTAMP(ci.fecha_hora) AS 'fecha_hora', c.nombre AS 'nombre_cliente', e.nombre AS 'nombre_empleado' FROM citas ci JOIN clientes c ON c.dni = ci.dni_cliente JOIN empleados e ON e.dni = ci.dni_empleado ORDER BY ci.id;"
        const citas = await pool.query(citasQuery);
        /* SELECT ci.fecha_hora AS 'fecha_hora', c.nombre AS 'nombre_cliente', e.nombre AS 'nombre_empleado' 
        FROM citas ci
        JOIN clientes c ON c.dni = ci.dni_cliente
        JOIN empleados e ON e.dni = ci.dni_empleado
        ORDER BY ci.id;   */
        res.json(citas);
    } 

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params; // deestructuracion
        const citas = await pool.query('SELECT * FROM citas WHERE id = ?', [id]);
        if (citas.length > 0) {
            return res.json(citas[0]); 
        }
        // Devolverlo al cliente
        res.status(404).json({text: "La cita no existe"});
    }
    
    public async create (req: Request, res: Response): Promise<void> {
        //console.log(req.body); // angular envia los datos a traves de este req.body. Puedes ver los datos en la consola. 
        await pool.query('INSERT INTO citas SET ?', [req.body]);
        //  Cuando termine lo de arriba, continua 
        res.json({message: 'Cita guardada'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params; // deestructuracion
        await pool.query('UPDATE citas SET ? WHERE id = ?', [req.body, id]);
        res.json({message: 'La cita fue actualizada'});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params; // deestructuracion
        await pool.query('DELETE FROM citas WHERE id = ?', [id]);
        res.json({message: 'La cita fue eliminada'});
    }

}

const citasController = new CitasController();

export default citasController;