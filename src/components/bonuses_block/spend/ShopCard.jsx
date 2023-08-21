import { CaretLeft } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'

const ShopCard = ({ shop }) => {
	const navigate = useNavigate()
	return (
		<div className='block bonus-block-card'>
			<div className='bonus-back-button' onClick={() => navigate(-1)}>
				<CaretLeft weight='bold' className='icon_big' />
				<h4>Назад</h4>
			</div>
			<img src={shop.image} alt={shop.name} className='bonus-card-big-img' />
			<div className='bonus-block bonus-card-wrapper'>
				<h2>{shop.name}</h2>
				<pre>{shop.desc}</pre>
			</div>
		</div>
	)
}

export default ShopCard
