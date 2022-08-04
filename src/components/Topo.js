import React, { useContext, useState } from "react"
import UserContext from "../contexts/UserContext";
import { Trackit } from "../assets/img/Logos";
import styled from 'styled-components';

export default function Topo() {

  const { user } = useContext(UserContext);
  console.log(user)

    return <TopoApp>
        <Trackit /> <FotoCapa src={user.image} alt={user.name}/>   
        </TopoApp>;
}

const TopoApp = styled.div`
  position: fixed;
  width: 100%;
  height: 70px;
  left: 0px;
  top: 0px;

  background: #126BA5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

const FotoCapa = styled.img`
    width: 52px;
    height: 52px;
    border-radius: 100px;
`;