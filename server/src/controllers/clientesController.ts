import { Request, Response } from 'express'; // Pedimos estos tipos de datos

import pool from '../database'; // Traer base de datos

class ClientesController {

    public async list (req: Request, res: Response) {
        const clientes = await pool.query('SELECT * FROM clientes');
        res.json(clientes);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params; // deestructuracion
        const clientes = await pool.query('SELECT * FROM clientes WHERE dni = ?', [id]);
        if (clientes.length > 0) {
            return res.json(clientes[0]); 
        }
        // Devolverlo al cliente
        res.status(404).json({text: "El cliente no existe"});
    }
    
    public async create (req: Request, res: Response): Promise<void> {
        //console.log(req.body); // angular envia los datos a traves de este req.body. Puedes ver los datos en la consola. 
        await pool.query('INSERT INTO clientes SET ?', [req.body]);
        //  Cuando termine lo de arriba, continua 
        res.json({message: 'Cliente guardado'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params; // deestructuracion
        await pool.query('UPDATE clientes SET ? WHERE dni = ?', [req.body, id]);
        res.json({message: 'El cliente fue actualizado'});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params; // deestructuracion
        await pool.query('DELETE FROM clientes WHERE dni = ?', [id]);
        res.json({message: 'El cliente fue eliminado'});
    }

}

const clientesController = new ClientesController();

export default clientesController;