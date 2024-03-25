import React from 'react';
import { Hero } from '../home/Hero'; 
import { About } from '../pages/About'; 
import { Services } from '../home/Services'; 
import { Counter } from '../pages/Counter'; 


export const Home = () => {
  return (
    <>
      <Hero/> 
      <About/> 
      <Services/> 
      <Counter />

    </>
  );
}