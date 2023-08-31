import { NavLink } from 'react-router-dom'

const ShopFullPreview = ({ shop }) => {
	
	return (
		<NavLink to={`./${shop.id}`} key={shop.id} className='big-item-wrapper select-zoom'>
			<img id="shopImg" src={shop.image} alt={shop.name} className='bonus-preview-img' />
			<div className='info-wrapper'>
				<h4>{shop.name}</h4>
			</div>
		</NavLink>
	)
}

export default ShopFullPreview
