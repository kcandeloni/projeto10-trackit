import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Cadastro from './Cadastro';
import { Container } from '../assets/style/body';
import PrivatePage from "./PrivatePage";
import Habitos from './Habitos';
import Hoje from './Hoje';
import Historico from './Historico';

export default function App() {

    return (
        <Container>
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
      </Container>
    );
}