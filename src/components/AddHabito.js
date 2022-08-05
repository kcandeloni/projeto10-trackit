import { Button, ContainerMenu, SubTitulo } from './common';

export default function AddHabito({ addHabito, setAddHabito}) {
    return (
        <ContainerMenu>
            <SubTitulo>Meus hábitos</SubTitulo> 
            <Button onClick={() => setAddHabito(!addHabito)}size='tiny' >+</Button>   
        </ContainerMenu>);
}