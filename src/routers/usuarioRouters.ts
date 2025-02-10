import { Router } from "express";
import usuarioController from "../controllers/usuarioControllers";   

const usuarioRouter= Router();    

usuarioRouter.get('/', usuarioController.getAllUsuario); 

export default usuarioRouter;                                  