import express, { Request, Response } from 'express';
import usuarioRouter from './routers/routers';


const app = express();
const port = process.env.port || 3000;

app.use(express.json());

app.get("/",async (req:Request, res:Response) => {
    res.send("Hola mundo");
});

app.use('/api/usuarios', usuarioRouter);


app.listen(port, () => {
    console.log(`Conexion establecidad con el puerto selecionado: ${port}`);
});