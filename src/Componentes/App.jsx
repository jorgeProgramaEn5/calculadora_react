import '../Estilos/App.css';
import calculadora_logo from '../img/calculadora_logo.png';
import Display from './Display';
import BotonNumero from './BotonNumero';
import BotonClear from './BotonClear';

function App() {

  // const presionarNum = ()=> {
  //   console.log("hola")
  // }

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
          <Display />

          <div className='contenedor_numeros'>
            <BotonNumero
              // presionar = {presionarNum}
            >7</BotonNumero>
            <BotonNumero>8</BotonNumero>
            <BotonNumero>9</BotonNumero>
            <BotonNumero estilo = {operadorEstilo}>+</BotonNumero>
            <BotonNumero>4</BotonNumero>
            <BotonNumero>5</BotonNumero>
            <BotonNumero>6</BotonNumero>
            <BotonNumero estilo = {operadorEstilo}>-</BotonNumero>
            <BotonNumero>1</BotonNumero>
            <BotonNumero>2</BotonNumero>
            <BotonNumero>3</BotonNumero>
            <BotonNumero estilo = {operadorEstilo}>*</BotonNumero>
            <BotonNumero>=</BotonNumero>
            <BotonNumero>0</BotonNumero>
            <BotonNumero>.</BotonNumero>
            <BotonNumero estilo = {operadorEstilo}>/</BotonNumero>
            
          </div>
          
          <BotonClear />
        </div>

      </div>
    </div>
  );
}

export default App;
