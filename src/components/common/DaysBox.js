import React, { useState } from "react";
import styled from 'styled-components';

export default function DaysBox({
    index,
    setDays,
    days,
    children,
    ...otherProps
}) {
    const [select, setSelect] = useState(false);

    function alteraDiaHabito(){
        const posicao = days.indexOf(index);
        const newDays = days;
        if(posicao < 0){
            newDays.push(index)
        }
        else{
            newDays.splice(posicao,1)
        }
        setDays(newDays);
    }
    return (
        <DayBox {...otherProps}
        index={index}
        select={select}
        onClick={() => {setSelect(!select);
            alteraDiaHabito();
        }}
        setDays={setDays}
        days={days} >
            {children}
        </DayBox>
    );
}

const DayBox = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-right: 4px;
    font-weight: 400;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    ${(props) => {
        if(props.select){
            return `background-color: #DBDBDB;
                color: #FFFFFF;`
        }
        else{
            return `background-color: #FFFFFF;
                color: #DBDBDB;`}}}
`;