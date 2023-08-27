import { CaretRight, Coins } from '@phosphor-icons/react'
import { useState } from 'react'
import ShopModal from './ShopModal'

const ShopOption = ({ services }) => {
	const [activeModal, setActiveModal] = useState(null)
	const [isOpenAllowed, setIsOpenAllowed] = useState(true)

	const setModal = index => {
		if (isOpenAllowed) setActiveModal(index)
	}

	return (
		<>
			{services.map((service, index) => (
				<div
					className='content_cover select-zoom'
					key={index}
					style={{ borderRadius: '20px' }}
					onClick={() => setModal(index)}
				>
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
			<ShopModal
				serviceIndex={activeModal}
				services={services}
				setActiveModal={setActiveModal}
				setIsOpenAllowed={setIsOpenAllowed}
			/>
		</>
	)
}

export default ShopOption
