import styled from 'styled-components';
import { ContainerMenu, SubTitulo, TextConteudo } from './common';

import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import 'dayjs/locale/pt-br';

dayjs.extend(updateLocale)
dayjs.updateLocale('pt-br', {
  weekdays: [
    "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"
  ]
})

export default function ProgressoHoje({progresso}) {

    return (
        <DataProgresso>
            <SubTitulo>{dayjs().locale('pt-br').format('dddd')}, {dayjs().format('DD/MM')}</SubTitulo> 
                {progresso > 0 ?
                <Progresso color='#8FC549'>
                    {progresso}% dos hábitos concluídos
                </Progresso>:
                <Progresso color='#BABABA'>
                    Nenhum hábito concluído ainda 
                </Progresso>}
        </DataProgresso>);
}

const DataProgresso = styled (ContainerMenu)`
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
`;

const Progresso = styled (TextConteudo)`
    color: ${(props) => props.color};
    padding: 0  0;
    margin-top: 4px;
`;