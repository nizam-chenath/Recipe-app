import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Splide, SplideSlide, SpliedSlide} from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';

function Popular() {
  
  const [popular, setPopular] = useState([])

  useEffect(()=>{
    getPopular();
  },[])

  const getPopular = async () => {

    const check = localStorage.getItem("popular");
    
    if(check){
      setPopular(JSON.parse(check));
    }else{

      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
      const data = await api.json();

      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
      console.log(data.recipes);
    }
  }
  return (
    <div>

      <Wrapper>
      <h4>hot picks</h4>
    <Splide options={{
        perPage: 4,
        arrows: false,
        drag: 'free',
        pagination: false,
        gap: "3.5rem",
      }}>

        {popular.map((recipe)=>{
          return(
            <SplideSlide>
            <Card key={recipe.id}>
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
              <Gradient />
            </Card>
            </SplideSlide>
          );
        })} 
    </Splide>
      </Wrapper>
    
    </div>
  )
}

const Wrapper = styled.div`
   margin: 4rem 0rem;
`;
const Card = styled.div`
  min-height: 15rem;
  border-radius: 2rem
  overflow: hidden;9
  position: relative;
 

  img{
   
    position: absolute;
    border-radius: 2rem;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    fontweight: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;

  }
`;

const Gradient = styled.div`
z-index: 3;
position: absolute;
width:100%;
height:100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))
`;
export default Popular