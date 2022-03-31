import React from 'react';
import styled from 'styled-components';
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa'

function Search() {

    const [input, setInput] = useState("");

  return (
    <FormStyle>
        <div>
            <FaSearch></FaSearch>
        <input onChange={(e)=> setInput(e.target.value)} type="text" value={input}/>
        <h1>{input}</h1>
        </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
margin: 0rem 20rem;

div{
    width: 100%;
    position: relative;
}
input{
    border: none;
    background-color: #bdd4e7;
    background-image: linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%);

    font-size: 1.5rem;
    color: white;
    padding: 0.4rem 10rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
}
svg{
    position: absolute;
    top: 50%;
    
}
`

export default Search