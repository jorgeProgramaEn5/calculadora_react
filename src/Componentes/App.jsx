import '../Estilos/App.css';
import calculadora_logo from '../img/calculadora_logo.png';
import Display from './Display';
import BotonNumero from './BotonNumero';
import BotonClear from './BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs'; 

// para usar este metodo hay que instalar el paquete mathjs
// esto se hizo con el comando npm install mathjs

function App() {

  let [contador, setContador] = useState("");

  // funcion para sumarle caracteres al display
  // Notese que se le pasa un argumento a la funcion
  // y cuando esa funcion la llama el componente, pues tenemos
  // que psarle como argumento el valor de children

  const presionarNum = (input)=> {
    setContador(contador + input);
  };

  // funcion para limpiar el display
  const clear = ()=>{
    setContador(contador = "");
  };

  // en js existen valores truthy y falsy y lo qu significa es que son valores
  // que por si solos son verdaderos o falsos, ejemplo, las cadenas de caracteres vacias
  // son falsas, por eso en esta funcion, si contador esta vacio, pues devuelve falso

  const calculo = ()=>{
    if (contador) {
      setContador(evaluate(contador));
    } else {
        alert("ingrese digitos por favor");
      }
  };

  return (
    <div className='App'>
      <div className='contenedor_app'>

        <div className='contenedor_logo'>
          <div className='contenedor_img'>
            <img className='img' src={calculadora_logo} alt='bender'/>
          </div>
          <h2>CALCULADORA</h2>
        </div>

        <div className='contenedor_calculadora'>
          <Display 
            operacion={ contador } 
          />

          <div className='contenedor_numeros'>
            <BotonNumero presionar = {presionarNum}>7</BotonNumero>
            <BotonNumero presionar = {presionarNum}>8</BotonNumero>
            <BotonNumero presionar = {presionarNum}>9</BotonNumero>
            <BotonNumero presionar = {presionarNum}>+</BotonNumero>
            <BotonNumero presionar = {presionarNum}>4</BotonNumero>
            <BotonNumero presionar = {presionarNum}>5</BotonNumero>
            <BotonNumero presionar = {presionarNum}>6</BotonNumero>
            <BotonNumero presionar = {presionarNum}>-</BotonNumero>
            <BotonNumero presionar = {presionarNum}>1</BotonNumero>
            <BotonNumero presionar = {presionarNum}>2</BotonNumero>
            <BotonNumero presionar = {presionarNum}>3</BotonNumero>
            <BotonNumero presionar = {presionarNum}>*</BotonNumero>
            <BotonNumero presionar = {calculo}>=</BotonNumero>
            <BotonNumero presionar = {presionarNum}>0</BotonNumero>
            <BotonNumero presionar = {presionarNum}>.</BotonNumero>
            <BotonNumero presionar = {presionarNum}>/</BotonNumero>
            
          </div>
          
          <BotonClear limpiar = {clear} />
        </div>

      </div>
    </div>
  );
}

export default App;
