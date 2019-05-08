import { Request, Response } from 'express'; // Pedimos estos tipos de datos

import pool from '../database'; // Traer base de datos

class CosmeticosController {

    public async list (req: Request, res: Response) {
        const cosmeticos = await pool.query('SELECT * FROM cosmeticos');
        res.json(cosmeticos);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params; // deestructuracion
        const cosmeticos = await pool.query('SELECT * FROM cosmeticos WHERE codigo = ?', [id]);
        if (cosmeticos.length > 0) {
            return res.json(cosmeticos[0]); 
        }
        // Devolverlo al cliente
        res.status(404).json({text: "El cosmetico no existe"});
    }
    
    public async create (req: Request, res: Response): Promise<void> {
        //console.log(req.body); // angular envia los datos a traves de este req.body. Puedes ver los datos en la consola. 
        await pool.query('INSERT INTO cosmeticos SET ?', [req.body]);
        //  Cuando termine lo de arriba, continua 
        res.json({message: 'Cosmetico guardada'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params; // deestructuracion
        await pool.query('UPDATE cosmeticos SET ? WHERE codigo = ?', [req.body, id]);
        res.json({message: 'el cosmetico fue actualizado'});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params; // deestructuracion
        await pool.query('DELETE FROM cosmeticos WHERE codigo = ?', [id]);
        res.json({message: 'El cosmetico fue eliminado'});
    }

}

const cosmeticosController = new CosmeticosController();

export default cosmeticosController;