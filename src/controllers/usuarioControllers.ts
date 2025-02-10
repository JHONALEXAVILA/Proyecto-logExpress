import { Request, Response } from 'express';
import usuariosServices from '../services/usuariosServices';
import { sendError, sendSuccess } from '../utils/requesHandler';


 class usuarioController{
    async getAllUsuario(req:Request, res:Response) {
 try {
        const usuarios = await usuariosServices.getAllUsuarios();
        sendSuccess(res, usuarios);    
    } catch (error: any) {
        sendError(res, error.message);
    }
}
}
export default new usuarioController();