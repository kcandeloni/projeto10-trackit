import styled from 'styled-components';
import { Button, ContainerMenu } from './common';
import { useNavigate } from "react-router-dom";
import SuperButton from './SuperButon';

import React, { useContext, useEffect } from "react"
import UserContext from "../contexts/UserContext";
import { getToday } from './trackitService';
import { calc } from './CalcProgresso';

export default function Menu() {
    const navigate = useNavigate();
    const {progresso, setProgresso} = useContext(UserContext);

    useEffect(() => {
        const promise = getToday();
        promise
            .then(resposta => { 
                console.log(resposta, 'Today');
                setProgresso(calc(resposta.data));
            })
            .catch(resposta => console.log(resposta))
      }, []);

    return (
        <>
            <BottomMenu>
                <Button onClick={() => navigate('/habitos')} color='white' >Hábitos</Button>
                <SuperButton onClick={() => navigate('/hoje')} progresso={progresso} >Hoje</SuperButton>
                <Button onClick={() => navigate('/historico')} color='white' >Histórico</Button>
            </BottomMenu>
        </>);
}

const BottomMenu = styled (ContainerMenu)`
    position: fixed;
    left: 0px;
    bottom: 0px;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
`;