import { ContainerMenu, SubTitulo, TextConteudo, ContainerBox, Button } from "./common";
import TodayBox from "./TodayBox";
import { getHistory } from "./trackitService";
import styled from "styled-components";

import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';
import { FallingLines } from "react-loader-spinner";

export default function HistoricoDia({
    dataDay,
    setOpenDay
}) {
    console.log(dataDay)
    return (
            <>
                <ContainerMenu>
                    <SubTitulo>Histórico {dataDay.day}</SubTitulo> 
                    <Button onClick={() => setOpenDay(false)} size='tiny' ><ion-icon name="arrow-undo"></ion-icon></Button>   
                </ContainerMenu>
                <TextConteudo>
                    
                </TextConteudo>
                
                {dataDay.habits.map((elem, index) => 
                <TodayBox key={index} {...elem} />)} 
        
            </>
    );
}
