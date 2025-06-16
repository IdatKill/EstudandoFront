import { Typography } from "@mui/material";
import ListarEventos from "./eventos/listar/page";
import Login from "./usuario/login/page";

export default function Home() {
  return(
    <div>
      <Login></Login>
      <ListarEventos></ListarEventos>
    </div>
  );
}

////testando para ver se vai alterar o commit