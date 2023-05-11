import '../Estilos/App.css';
import calculadora_logo from '../img/calculadora_logo.png';
import Display from './Display';
import BotonNumero from './BotonNumero';
import BotonClear from './BotonClear';
import { useState } from 'react';

function App() {

  let [contador, setContador] = useState("");

  const presionarNum = (value)=> {
    setContador(contador + value)
  }

  const clear = ()=> {
    setContador(contador = "")
  }

  const operadorEstilo = {
    backgroundColor: 'darkgreen',
    borderColor: 'darkgreen',
  }

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
            <BotonNumero presionar = {presionarNum} estilo = {operadorEstilo}>+</BotonNumero>
            <BotonNumero presionar = {presionarNum}>4</BotonNumero>
            <BotonNumero presionar = {presionarNum}>5</BotonNumero>
            <BotonNumero presionar = {presionarNum}>6</BotonNumero>
            <BotonNumero presionar = {presionarNum} estilo = {operadorEstilo}>-</BotonNumero>
            <BotonNumero presionar = {presionarNum}>1</BotonNumero>
            <BotonNumero presionar = {presionarNum}>2</BotonNumero>
            <BotonNumero presionar = {presionarNum}>3</BotonNumero>
            <BotonNumero presionar = {presionarNum} estilo = {operadorEstilo}>*</BotonNumero>
            <BotonNumero presionar = {presionarNum}>=</BotonNumero>
            <BotonNumero presionar = {presionarNum}>0</BotonNumero>
            <BotonNumero presionar = {presionarNum}>.</BotonNumero>
            <BotonNumero presionar = {presionarNum} estilo = {operadorEstilo}>/</BotonNumero>
            
          </div>
          
          <BotonClear limpiar= {clear} />
        </div>

      </div>
    </div>
  );
}

export default App;
