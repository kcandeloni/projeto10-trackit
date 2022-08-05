import styled from 'styled-components';
import { Button, ContainerMenu } from './common';
import { useNavigate } from "react-router-dom";
import SuperButton from './SuperButon';

let percentage = 75;

export default function Menu() {
    const navigate = useNavigate();
    return (
        <>
            <BottomMenu>
                <Button onClick={() => navigate('/habitos')} color='white' >Hábitos</Button>
                <SuperButton onClick={() => navigate('/hoje')} percentage={percentage} >Hoje</SuperButton>
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