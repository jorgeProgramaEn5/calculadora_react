import '../Estilos/Display.css';


const BotonDisplay = ({ operacion })=> {
	return (
		<div>
			<div className='contenedor_display'>{ operacion }</div>
		</div>
	)
}

export default BotonDisplay;