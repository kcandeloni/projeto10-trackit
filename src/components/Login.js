import { Logo } from '../assets/img/Logos.js';
import { Button, Input, TextLink, Tela } from '../assets/style';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { login, setToken} from './trackitService';

export default function Login () {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleForm(e) {
        e.preventDefault();
        const body = {
          email,
          password
        };
        console.log(body);
        setEmail('');
        setPassword('');
        
        const promise = login(body);

        promise
            .then(resposta => { 
                console.log(resposta);
                setToken(resposta.data.token);
                navigate('/habitos');})
            .catch(resposta => console.log(resposta))
    }

    return (
        <Tela>
            <Logo />

            <form onSubmit={handleForm}>
                
                <Input
                type='text'
                placeholder='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                />

                <Input
                type='password'
                placeholder='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                />

                <Button size='large' >Entrar</Button>
            </form>
            

            <Link to='/cadastro'>
                <TextLink>Não tem uma conta? Cadastre-se!</TextLink>
            </Link>
        </Tela>
    );
}