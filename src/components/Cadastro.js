import { Link } from 'react-router-dom';
import Logo from './Logo.js';
import styled from 'styled-components';

export default function Cadastro () {

    return (
        <Container>
            <Logo />
                


            <Link to='/'>
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </Container>
    );

}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;


    input{
        width: 303px;
        height: 45px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
    }

    p{
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-decoration-line: underline;

        color: #52B6FF;
        cursor: pointer;
    }
`;

