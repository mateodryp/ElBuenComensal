import React from 'react';
import HeaderPublic from "../Components/HeaderPublic";
import imagenHome from '../Statics/img/Home-Image.jpg'

const Home = () => {
  return (
    <>
        <HeaderPublic /> 
        <div class="main_image">
            <img src={imagenHome} alt="Disfruta la comida"/>
        </div>
    </>
  )
}

export default Home;

