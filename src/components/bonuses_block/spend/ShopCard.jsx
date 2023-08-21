const ShopCard = ({ shop }) => {
	return (
		<div className='block' style={{ padding: '0' }}>
			<img src={shop.image} alt={shop.name} className='bonus-preview-img' />
		</div>
	)
}

export default ShopCard
