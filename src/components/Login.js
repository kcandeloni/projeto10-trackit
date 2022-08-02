import Logo from './Logo.js';
import styled from 'styled-components';
import { useState } from 'react';

import { Link } from 'react-router-dom';

export default function Login () {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function handleForm(e) {
        e.preventDefault();
        const body = {
          email,
          senha,
        };
        console.log(body);
        setEmail('');
        setSenha('');
    }

    return (
        <Container>
            <Logo />

            <form onSubmit={handleForm}>
                
                <input
                type='text'
                placeholder='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                />

                <input
                type='password'
                placeholder='senha'
                onChange={(e) => setSenha(e.target.value)}
                value={senha}
                required
                />

                <button>Entrar</button>
            </form>
            

            <Link to='/cadastro'>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Container>
    );
}

const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input{
        width: 303px;
        height: 45px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;

        font-weight: 400;
        font-size: 20px;
        padding: 0 10px;
        margin: 6px 0;
    }

    p{
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-decoration-line: underline;

        color: #52B6FF;
        cursor: pointer;
    }

    button{
        width: 303px;
        height: 45px;

        background: #52B6FF;
        border-radius: 5px;
    }

    *{
        box-sizing: border-box;
    }
`;