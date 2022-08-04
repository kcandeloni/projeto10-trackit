import styled from "styled-components";
import AddHabito from "./AddHabito";
import Menu from "./Menu";

import React, { useContext, useState } from "react"
import UserContext from "../contexts/UserContext";

export default function Habitos() {

   /*  const { user, setUser } = useContext(UserContext);*/
    
    return (
        <>
            <AddHabito />
            
            <Menu />
        </>);
}
  