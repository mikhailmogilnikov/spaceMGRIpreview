import { CaretLeft } from '@phosphor-icons/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { initialShop } from '../../../storage/initShops'
import ShopFullPreview from './ShopFullPreview'

const BonusSpend = () => {
	const [shop] = useState(initialShop)
	const navigate = useNavigate()

	return (
		<div className='block'>
			<div
				className='title_container back_container'
				onClick={() => navigate(-1)}
			>
				<CaretLeft weight='bold' className='icon_mid' />
				<h2>Потратить бонусы</h2>
			</div>

			<div className='element_container grid-two'>
				{shop.map(shop => (
					<ShopFullPreview key={shop.id} shop={shop} />
				))}
			</div>
		</div>
	)
}

export default BonusSpend
