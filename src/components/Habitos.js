import styled from 'styled-components';
import AddHabito from './AddHabito';
import MeusHabitos from './MeusHabitos';
import { TextConteudo, ContainerBox,Input, Button, DaysBox } from './common';

import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../contexts/UserContext';
import { create, getHabits } from './trackitService';

export default function Habitos() {

    const [addHabito, setAddHabito] = useState(false);
    const [nomeHabito, setNameHabito] = useState('');
    const [days, setDays] = useState([]);
    const [lista, setLista] = useState([]);

    const { user, setUser } = useContext(UserContext);

    const letraDia = ['D','S','T','Q','Q','S','S'];


    function atualizaHabitos () {
        const promise = getHabits();
        promise
            .then(resposta => { 
                console.log(resposta, 'Meus Habitos');
                setLista(resposta.data);
            })
            .catch(resposta => console.log(resposta))
    }

    useEffect(() => {
        atualizaHabitos();
      }, []);


    function criaHabito (){
        if(!!nomeHabito.length && !!days.length){
            const body = {
                name: nomeHabito,
                days
            };
            console.log(body);
            setNameHabito('');
            setDays([]);
            
            const promise = create(body);
            setAddHabito(false);
            promise
                .then(resposta => { 
                    console.log(resposta);
                    atualizaHabitos();
                })
                .catch(resposta => console.log(resposta))
        }
        else{
            alert('Preencher todos dados antes de salvar!')
        }
    }

    return (
        <>
            <AddHabito
                onClick={() => 
                    {setNameHabito('');
                    setDays([]);
                    setAddHabito(!addHabito);}}/>
            {addHabito ?
                <ContainerBox>
                    <ImputBox
                    placeholder='nome do hábito' 
                    type='text'
                    onChange={(e) => setNameHabito(e.target.value)}
                    value={nomeHabito}
                    required/>
                    <Box>
                        {letraDia.map( (day,index) => 
                            <DaysBox key={index} index={index} setDays={setDays} days={days}>
                                {day}
                            </DaysBox>)}
                    </Box>
                    <BotaoBox>
                        <Button color='white' onClick={() => {setNameHabito('');
            setDays([]);setAddHabito(false);}}>Calcelar</Button>
                        <Button onClick={() => criaHabito()}>Salvar</Button>    
                    </BotaoBox>
                </ContainerBox> 
            : ''}
            {lista.length > 0 ? (lista.map((habito, index) => <MeusHabitos
            key={index} 
            letraDia={letraDia}
            habito={habito}
            atualizaHabitos={atualizaHabitos} />)) :
            <TextConteudo>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </TextConteudo>}
        </>);
}

const ImputBox = styled (Input)`
    width: 100%;
`

const BotaoBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
`

const Box = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 24px;
`