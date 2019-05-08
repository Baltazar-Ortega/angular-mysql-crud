import { Request, Response } from 'express'; // Pedimos estos tipos de datos

import pool from '../database'; // Traer base de datos

class EmpleadosController {

    public async list (req: Request, res: Response) {
        const empleados = await pool.query('SELECT * FROM empleados');
        res.json(empleados);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params; // deestructuracion
        const empleados = await pool.query('SELECT * FROM empleados WHERE dni = ?', [id]);
        if (empleados.length > 0) {
            return res.json(empleados[0]); 
        }
        // Devolverlo al cliente
        res.status(404).json({text: "El empleado no existe"});
    }
    
    public async create (req: Request, res: Response): Promise<void> {
        //console.log(req.body); // angular envia los datos a traves de este req.body. Puedes ver los datos en la consola. 
        await pool.query('INSERT INTO empleados SET ?', [req.body]);
        //  Cuando termine lo de arriba, continua 
        res.json({message: 'Empleado guardado'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params; // deestructuracion
        await pool.query('UPDATE empleados SET ? WHERE dni = ?', [req.body, id]);
        res.json({message: 'El empleado fue actualizado'});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params; // deestructuracion
        await pool.query('DELETE FROM empleados WHERE dni = ?', [id]);
        res.json({message: 'El empleado fue eliminado'});
    }

}

const empleadosController = new EmpleadosController();

export default empleadosController;