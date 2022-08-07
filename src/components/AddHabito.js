import { Button, ContainerMenu, SubTitulo } from './common';

export default function AddHabito({...otherProps}) {
    return (
        <ContainerMenu>
            <SubTitulo>Meus hábitos</SubTitulo> 
            <Button {...otherProps} size='tiny' >+</Button>   
        </ContainerMenu>);
}