import { ContainerMenu, SubTitulo, Button } from "./common";
import TodayBox from "./TodayBox";

import React from 'react';

export default function HistoricoDia({
    dataDay,
    setOpenDay
}) {
    return (
            <>
                <ContainerMenu>
                    <SubTitulo>Histórico {dataDay.day}</SubTitulo> 
                    <Button onClick={() => setOpenDay(false)} size='tiny' ><ion-icon name="arrow-undo"></ion-icon></Button>   
                </ContainerMenu>
                
                {dataDay.habits.map((elem, index) => 
                <TodayBox key={index} {...elem} />)} 
        
            </>
    );
}
