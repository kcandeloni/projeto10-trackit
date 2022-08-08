import Topo from "./Topo";
import { useNavigate } from "react-router-dom";
import { ContainerPrivate } from "./common";
import Menu from "./Menu";

import Habitos from "./Habitos";
import Login from "./Login";
import Cadastro from "./Cadastro";
import Hoje from "./Hoje";
import Historico from "./Historico";

const SEC = 1000;
const HORA_1 = SEC * 60 * 60;

function renderError() {
  localStorage.clear("trackit");
  return <h1>ACESSO NÂO AUTORIZADO! FAÇA LOGIN!</h1>;
}

export default function PrivatePage({ children }) {
    const navigate = useNavigate();

    const auth = JSON.parse(localStorage.getItem("trackit"));
    if (!auth) {
        return renderError();
    }

    const now = +new Date();
    const timeLogged = auth.timestamp;
    
    if (now - timeLogged <= HORA_1) {
        return (
        <>
            <ContainerPrivate>
                <Topo />
                {children}
            </ContainerPrivate>
            <Menu />
        </>
        );
    } else {
        setTimeout(()=> navigate("/"), 3000);
        localStorage.clear("trackit");
        return(<h1>sessão expirada</h1>);
    }
}
