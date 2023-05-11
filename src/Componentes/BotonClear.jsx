import '../Estilos/BotonClear.css';

const BotonClear = ( props )=> {
	return (
		<div className='contenedor_clear'>
			<button 
				className='contenedor_clear_button'
				onClick = {props.limpiar}
			>
			Clear
			</button>
		</div>
	)
}

export default BotonClear;