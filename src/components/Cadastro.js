import { Link } from 'react-router-dom';
import { Logo } from '../assets/img/Logos.js';
import { Button, Input, TextLink, Tela } from './common';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


import { singUp } from './trackitService';

export default function Cadastro () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    function handleForm(e) {
        e.preventDefault();
        const body = {  
            email,
            name,
            image,
            password
        };
        console.log(body);
        setEmail('');
        setPassword('');
        setName('');
        setImage('');

        const promise = singUp(body);

        promise
            .then(resposta => {
                console.log(resposta);
                if(resposta.statusText === 'Created'){
                    navigate('/');
                }})
            .catch(resposta => {
                console.log(resposta);
                alert('Dados Inválidos!');})
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

                <Input
                type='text'
                placeholder='name'
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
                />

                <Input
                type='text'
                placeholder='image(url)'
                onChange={(e) => setImage(e.target.value)}
                value={image}
                required
                />

                <Button size='large' >Cadastrar</Button>
            </form>


            <Link to='/'>
                <TextLink>Já tem uma conta? Faça login!</TextLink>
            </Link>
        </Tela>
    );

}
