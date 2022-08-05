import styled from "styled-components";
import AddHabito from "./AddHabito";
import { TextConteudo, ContainerBox,Input } from "./common";

import React, { useContext, useState } from "react"
import UserContext from "../contexts/UserContext";

export default function Habitos() {

    const [addHabito, setAddHabito] = useState(false);
   /*  const { user, setUser } = useContext(UserContext);*/
    
    return (
        <>
            <AddHabito
                addHabito={addHabito} 
                setAddHabito={setAddHabito}/>
            {addHabito ?
                <ContainerBox>
                    <ImputBox placeholder='nome do hábito' />
                </ContainerBox> 
            : ''}
            <TextConteudo>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </TextConteudo>
        </>);
}

const ImputBox = styled (Input)`
    width: 100%;
`