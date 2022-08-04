import React, { useState } from "react";
import { Container, Wrapper, GlobalStyle } from './common';
/* import './common'; */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from "../contexts/UserContext";

import Login from './Login';
import Cadastro from './Cadastro';
import PrivatePage from "./PrivatePage";
import Habitos from './Habitos';
import Hoje from './Hoje';
import Historico from './Historico';

export default function App() {

    const [user, setUser] = useState({});

    return (
        <>
        <GlobalStyle />
            <Container>
                <Wrapper>
                    <UserContext.Provider value={{ user, setUser }}>
                        <BrowserRouter>
                            <Routes>
                                <Route path='/' element={<Login />}/>
                                <Route path='/cadastro' element={<Cadastro />}/>
                                <Route path='/habitos' element={
                                    <PrivatePage>
                                        <Habitos />
                                    </PrivatePage>}/>
                                <Route path='/Hoje' element={
                                    <PrivatePage>
                                        <Hoje />
                                    </PrivatePage>}/>
                                <Route path='/historico' element={
                                    <PrivatePage>
                                        <Historico />
                                    </PrivatePage>}/>
                            </Routes>
                        </BrowserRouter>
                    </UserContext.Provider>
                </ Wrapper>
        </Container>
      </>
    );
}