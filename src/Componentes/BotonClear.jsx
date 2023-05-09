import '../Estilos/BotonClear.css';

const BotonClear = ( {children, limpiar } )=> {
	return (
		<div className='contenedor_clear'>
			<button 
				className='contenedor_clear_button'
				onClick={limpiar}
			>
			Clear
			</button>
		</div>
	)
}

export default BotonClear;