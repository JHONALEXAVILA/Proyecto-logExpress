import database from "database.ts/database";
import { usuarios } from "modelos/usuarios";

class UsuariosService {
 async getAllUsuarios(): Promise<usuarios[]> {  
    const usuarios = await database.query("SELECT * FROM usuarios");
    return usuarios as usuarios[];
  }
}

export default new UsuariosService();   