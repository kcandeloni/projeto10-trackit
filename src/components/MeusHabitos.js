import { ContainerBox } from './common';
import styled from 'styled-components';
import { deleteHabits } from './trackitService';

export default function MeusHabitos({
    habito,
    letraDia,
    setAtualizar,
    atualizar }) {

    function rederDia (day, index, diasHabito) {
      let bcolor = '#FFFFFF';
      let color = '#DBDBDB';
      if(diasHabito.indexOf(index) >= 0){
          bcolor = '#DBDBDB';
          color = '#FFFFFF';
      }
      return(
          <DayBox key={index}
              bcolor={bcolor}
              color={color} >
                  {day}
          </DayBox>
      );
    }

    function deletar (id) {
      const promise = deleteHabits(id);
      promise
      .then(resposta => { 
          setAtualizar(!atualizar);
      })
      .catch(resposta => console.log(resposta))
    }
    return(
        <Box>
          {habito.name}
          <BotaoExclui onClick={() => deletar(habito.id)} >
              <ion-icon name='trash-outline'></ion-icon>
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
    
    background-color: ${(props) => props.bcolor};
    color: ${(props) => props.color};
`;

const BotaoExclui = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    ion-icon{
      font-size: 16px;
    }
`;