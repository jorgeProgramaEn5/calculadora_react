import '../Estilos/BotonNumero.css';

const BotonNumero = ({ estilo, children, presionar })=> {
// como todos los botones van mostrar si valor en display
// pues esto no seria un props
// ahora, como hago para que este valor se lo pase a un componente hermano (Display)	


	return (
		<div>
			<div className='contenedor'>
				<button 
					className='contenedor_button' 
					style={estilo} 
					onClick={()=>presionar(children)}
					// onMouseOver="this.style.color='#f00'"
				>
				{children}
				</button>
			</div>
		</div>
	)
}

export default BotonNumero;

// vamos a utilizar varios estilos en los operadores a ver si me sale
// esto significa que no se puede utilizar los operadores ternarios
// y tendremos que pasarle objetos a los estilos, esto hay que hacerlo con el atributo style

// className='contenedor_button'