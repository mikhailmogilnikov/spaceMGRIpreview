import { NavLink } from 'react-router-dom'

const ShopPreview = ({ shop, shopIndex }) => {
	return (
		<NavLink to={`./spend/${shopIndex}`} className='bonus-preview-item'>
			<img src={shop.image} alt={shop.name} className='bonus-preview-img' />
			<div className='info-wrapper'>
				<h4>{shop.name}</h4>
			</div>
		</NavLink>
	)
}

export default ShopPreview
