import styled from 'styled-components';
import { Button, ContainerMenu } from './common';
import SuperButton from './SuperButon';

let status = 75;

export default function Menu() {
    return (
        <>
            <BottomMenu>
                <Button color='white' >Hábitos</Button>
                <SuperButton status={status} >Hoje</SuperButton>
                <Button color='white' >Histórico</Button>
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