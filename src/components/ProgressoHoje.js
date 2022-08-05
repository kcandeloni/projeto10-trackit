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

export default function ProgressoHoje() {
    
    return (
        <DataProgresso>
            <SubTitulo>{dayjs().locale('pt-br').format('dddd')}, {dayjs().format('DD/MM')}</SubTitulo> 
                <Progresso>
                    Nenhum hábito concluído ainda 
                </Progresso>
        </DataProgresso>);
}

const DataProgresso = styled (ContainerMenu)`
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
`;

const Progresso = styled (TextConteudo)`
    color: color: #BABABA;
    padding: 0  0;
`;