import { Request, Response } from 'express'; // Pedimos estos tipos de datos

class IndexController {

    public index (req: Request, res: Response) {
        res.json({text: 'The API is active'});
    } 

}

export const indexController = new IndexController();










