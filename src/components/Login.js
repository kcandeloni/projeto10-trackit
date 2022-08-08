import { Logo } from '../assets/img/Logos.js';
import { Button, Tela, Input, TextLink } from './common';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { login, setToken, getToken} from './trackitService';

import React, { useContext, useState, useEffect } from "react"
import UserContext from "../contexts/UserContext";

export default function Login () {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        const persistencia = getToken();
        
        if(!!persistencia.headers){
            navigate('/habitos');
        }
      }, []);

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
                setToken({...resposta.data}, setUser);
                console.log(user)
                navigate('/habitos');})
            .catch(resposta => {
                console.log(resposta)
                alert('Dados Inválidos!')})
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