import '../Estilos/BotonNumero.css';

const BotonNumero = ({ estilo, children, presionar })=> {

	// isNaN devuelve false si un caracter es un numero
	function esOperador(valor) {
			return isNaN(valor) && (valor !== '.') && (valor !== '=')
	}

	return (
		<div>
			<div className='contenedor'>
				<button 
					className={`contenedor_button ${esOperador(children)? "operador" : "boton"}`}
					onClick={()=>presionar(children)} //Notese que en esta linea se le pasa una funcion para que
																						//que llame a la funcion presionar, esto se hace asi porque
																						//si pasamos presionar(children), obtiene el valor que retorna
																						//y no la funcion
				>
				{children}
				</button>
			</div>
		</div>
	)
}

export default BotonNumero;
