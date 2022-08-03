import Topo from "./Topo";
import { useNavigate } from "react-router-dom";

import Habitos from "./Habitos";
import Login from "./Login";
import Cadastro from "./Cadastro";
import Hoje from "./Hoje";
import Historico from "./Historico";

const SEC = 1000;
const HORA_1 = SEC * 60 * 60;

function renderError() {
  //localStorage.clear("trackit");
  return <h1>VOCÊ NÃO É AUTORIZADO</h1>;
}

export default function PrivatePage({ children }) {
    const navigate = useNavigate();

    const auth = JSON.parse(localStorage.getItem("trackit"));
        console.log(auth)
    if (!auth) {
        return renderError();
    }

    const now = +new Date();
    const timeLogged = auth.timestamp;
    console.log(now, timeLogged, HORA_1);
    if (now - timeLogged <= HORA_1) {
        return (
        <>
            <Topo />
            {children}
        </>
        );
    } else {
        <h1>sessão expirada</h1>;
        setTimeout(()=> navigate("/"), 3000);
    }
}
