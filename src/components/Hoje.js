import styled from "styled-components";

import React, { useContext, useState, useEffect} from "react"
import UserContext from "../contexts/UserContext";
import ProgressoHoje from "./ProgressoHoje";
import { getToday } from "./trackitService";
import TodayBox from "./TodayBox";

export default function Hoje() {

    /*  const { user, setUser } = useContext(UserContext);*/
    const [listToday, setListToday] = useState([]);
    const [atualizar, setAtualizar] = useState(false);

    useEffect(() => {
        const promise = getToday();
        promise
            .then(resposta => { 
                console.log(resposta, 'Today');
                setListToday(resposta.data);
            })
            .catch(resposta => console.log(resposta))
      }, [atualizar]);

    return (
        <>
            <ProgressoHoje />

            {listToday.length > 0 ? 
            listToday.map((elem, index) => 
                <TodayBox key={index} {...elem}
                setAtualizar={setAtualizar}
                atualizar={atualizar} />) 
            : 'Deu ruim'}
        </>);
}
  