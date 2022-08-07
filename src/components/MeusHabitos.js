import { ContainerBox } from './common';
import styled from 'styled-components';
import { deleteHabits } from './trackitService';
import { useState } from 'react';

export default function MeusHabitos({habito, letraDia, atualizaHabitos: atualizaHabitos}) {

    function rederDia (day, index, diasHabito) {
      if(diasHabito.indexOf(index) >= 0){
        return(
          <DaySelect key={index}>
              {day}
          </DaySelect>
        );
      }
      return(
        <DayBox key={index}>
              {day}
          </DayBox>
      );
    }

    function deletar (id) {
      const promise = deleteHabits(id);
      promise
      .then(resposta => { 
          console.log(resposta);
          atualizaHabitos();
      })
      .catch(resposta => console.log(resposta))
    }
    console.log(habito)
    return(
        <Box>
          {habito.name}
          <BotaoExclui >
              {<ion-icon onClick={() => deletar(habito.id)} name='trash-outline"'></ion-icon>}
          </BotaoExclui>
          <Days>
            {letraDia.map((day, index) => rederDia(day, index, habito.days))}
          </Days>
        </Box>);
}

const Box = styled (ContainerBox)`
    font-size: 20px;
    color: #666666;
    position: relative;
`;

const Days = styled.div`
    display: flex;
    margin-top: 8px;
`;

const DayBox = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-right: 4px;
    font-weight: 400;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: #FFFFFF;
    color: #DBDBDB;
`;

const DaySelect = styled (DayBox)`
    background-color: #DBDBDB;
    color: #FFFFFF;
`;

const BotaoExclui = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    ion-icon{
      font-size: 16px;
      
    }
`;