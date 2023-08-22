import { CaretRight, Coins } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

const ShopOption = ({ services }) => {
	return (
		<>
		{services.map((service, index) => (
			<div className='content_cover select' key={index} style={{borderRadius: '20px'}}>
				<div className='content_elem_row'>
					<div className='content_inner_column service-wrapper'>
						<h4>{service.service}</h4>
						<div className='lighter not_checked'>
							<Coins weight='bold' className='icon_min icon-service' />
							<p>{service.price}</p>
						</div>
					</div>
					<CaretRight weight='bold' className='icon_min' />
				</div>
			</div>
		))}
		</>
	)
}

export default ShopOption
