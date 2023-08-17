const ItemPreview = ({ item }) => {
	return (
		<div className='bonus-preview-item'>
			<img src={item.image} alt={item.name} className='bonus-preview-img' />
			<div className='info-wrapper'>
				<h4>{item.name}</h4>
			</div>
		</div>
	)
}

export default ItemPreview
