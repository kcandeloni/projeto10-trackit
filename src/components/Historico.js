import { ContainerMenu, SubTitulo, TextConteudo, ContainerBox } from "./common";
import { getHistory } from "./trackitService";
import styled from "styled-components";

import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';
import HistoricoDia from "./HistoricoDia";

export default function Historico() {

    const [value, setValue] = useState(new Date());
    const [history, setHistory] = useState([]);
    const [openDay, setOpenDay] = useState(false);
    const [dataDay, setDataDay] = useState({});

    useEffect(() => {
        const promise = getHistory();
        promise
            .then(resposta => { 
                console.log(resposta, 'Histórico')
                setHistory(resposta.data);
            })
            .catch(resposta => console.log(resposta))
    }, []);
    

    function formatDate (date){

        function validaDia (index){
            if(history[index].habits.filter(elem => elem.done === false).length === 0){
                return true;
            }
            return false;
        }

        for(let i = 0; i < history.length; i++){
            if(history[i].day === dayjs(date).format('DD/MM/YYYY')){
                if(validaDia(i)){
                    return (<NiceDay onClick={() => {setDataDay(history[i]); setOpenDay(true)}} >
                                {dayjs(date).format('DD')}
                            </NiceDay>);
                }
                return (<BadDay onClick={() => {setDataDay(history[i]); setOpenDay(true)}}>
                            {dayjs(date).format('DD')}
                        </BadDay>);
            }
        }

        return (dayjs(date).format('DD'));
    }

    return (
            <>
                {openDay ?
                <HistoricoDia 
                dataDay={dataDay} setOpenDay={setOpenDay} />
                :<>
                    <ContainerMenu>
                        <SubTitulo>Histórico</SubTitulo>
                    </ContainerMenu>
                    {!!dataDay.day ? <TextConteudo>
                        Em breve você poderá ver o histórico dos seus hábitos aqui!
                    </TextConteudo> : ''}
                    <ContainerBox>
                        <Ajuste>
                            <Calendar
                                onChange={setValue}
                                value={value}
                                formatDay={(locale, date) => formatDate(date)} />
                        </Ajuste>
                    </ContainerBox>
                </>}
            </>
    );
}

const Ajuste = styled.div`
        div{
            outline: none;
            border: none;
        }

        display: flex;
        justify-content: center;
        align-items: center;
`;

const Day = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    cursor: pointer;
`;

const NiceDay = styled (Day)`
    background-color: #8FC549;
`;

const BadDay = styled (Day)`
    background-color: #d52a4f;
`;