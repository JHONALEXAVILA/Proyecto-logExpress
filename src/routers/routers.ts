import { Router } from "express";
import usuarioRouter from "./usuarioRouters";

const router= Router();    

router.use('/usuarios',usuarioRouter);  

export default router;