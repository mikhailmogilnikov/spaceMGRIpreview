import { CaretLeft } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'
import ShopOption from './ShopOption'

const ShopCard = ({ shop }) => {
	const navigate = useNavigate()
	return (
		<div className='block bonus-block-card'>
			<div className='bonus-back-button select-zoom' onClick={() => navigate(-1)}>
				<CaretLeft weight='bold' className='icon_big' />
				<h4>Назад</h4>
			</div>
			<img
				src={shop.image}
				alt={shop.name}
				className='bonus-card-big-img'
				style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}
			/>
			<div className='bonus-block bonus-card-wrapper'>
				<h2>{shop.name}</h2>
				{shop.desc && <pre>{shop.desc}</pre>}
				{shop.location && (
					<div className='element_container'>
						<div className='title_container'>
							<h3>Получение</h3>
						</div>
						<div className='content_cover'>
							<div className='content_elem_row'>
								<pre>{shop.location}</pre>
							</div>
						</div>
					</div>
				)}
				<div className='element_container'>
					<div className='title_container'>
						<h3>Услуги</h3>
					</div>
					<ShopOption services={shop.services} />
				</div>
			</div>
		</div>
	)
}

export default ShopCard
