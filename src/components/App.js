import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Login from './Login';
import Cadastro from './Cadastro';

export default function App() {

    return (
        <Container>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />}/>
                    <Route path='/cadastro' element={<Cadastro />}/>
                </Routes>
            </BrowserRouter>
      </Container>
    );
}

const Container = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: center;
    align-items: baseline;
`;