import '../Estilos/App.css';
import calculadora_logo from '../img/calculadora_logo.png';
import Display from './Display';
import BotonNumero from './BotonNumero';
import BotonClear from './BotonClear';

function App() {
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
            <BotonNumero />
            <BotonNumero />
            <BotonNumero />
            <BotonNumero />
            <BotonNumero />
            <BotonNumero />
            <BotonNumero />
            <BotonNumero />
            <BotonNumero />
            <BotonNumero />
            <BotonNumero />
            <BotonNumero />
            <BotonNumero />
            <BotonNumero />
            <BotonNumero />
            <BotonNumero />
          </div>
          
          <BotonClear />
        </div>

      </div>
    </div>
  );
}

export default App;
