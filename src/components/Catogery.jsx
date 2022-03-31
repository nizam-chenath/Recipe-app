import React from 'react'
import { FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import { GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'

function Catogery() {
  return (
    <List>
        <SLink to={"/cuisine/Italian"}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink>
        <SLink to={"/cuisine/American"}>
            <FaHamburger/>
            <h4>American</h4>
        </SLink>
        <SLink to={"/cuisine/Indian"}>
            <GiNoodles/>
            <h4>Indian</h4>
        </SLink>
        <SLink to={"/cuisine/Turkish"}>
            <GiChopsticks/>
            <h4>Turkish</h4>
        </SLink>
          
    </List>
  )
};

const List = styled.div`
  display: flex;
  justify-content:center;
  margin:2rem 0rem;
`;

const SLink = styled(NavLink)`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   border-radius: 50%;
   width: 4rem;
   height: 4rem;
   background: linear-gradient(35deg, #494949, #313131);
   text-decoration: none;
   margin-right: 2rem;
   cursor: pointer;

   h4{
     color: white;
     font-size: 0.7rem;
   }
   svg{
     color: white;
     font-size:1.2rem;
   }
   &.active{
    background-color: #a40606;
    background-image: linear-gradient(315deg, #a40606 0%, #d98324 74%);
    

     h4{
       color: white;

     }
     svg{
       color: white;
     }
   }
`;

export default Catogery