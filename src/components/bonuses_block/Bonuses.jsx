import {
	CaretRight,
	Coins,
	Question,
	Receipt,
	Trophy,
} from '@phosphor-icons/react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { initialEvents } from '../../storage/initEvents'
import { initialShop } from '../../storage/initShops'
import '../../styles/scss/bonuses.scss'
import EventPreview from './EventsPreview'
import ShopPreview from './ShopPreview'

export const currentDate = '01.09.2023'

const Bonuses = () => {
	const [shops] = useState(initialShop)
	const [events] = useState(initialEvents)

	return (
		<div className='block' style={{ padding: '0' }}>
			<div className='bonus-block'>
				<div className='title_container'>
					<h1>Мои бонусы</h1>
				</div>

				<div className='bonus-wrapper'>
					<div className='bonus-item'>
						<h2>264</h2>
					</div>
					<div className='bonus-item'>
						<Coins weight='bold' className='icon_mid' />
					</div>
				</div>

				<div className='element_container' style={{ gap: '20px' }}>
					<div className='content_cover large-rounded select-zoom'>
						<NavLink to={'./faq'} className='content_elem_row'>
							<Question weight='bold' className='icon_mid' />
							<p>Как получить</p>
							<CaretRight weight='bold' className='icon_mid' />
						</NavLink>
					</div>
					<div className='bonus-flex-wrapper'>
						<NavLink to={'./history'} className='bonus-flex-item select-zoom'>
							<h4>
								История
								<br /> операций
							</h4>
							<Receipt weight='fill' className='bonus-icon' />
						</NavLink>
						<NavLink to={'./leaderboard'} className='bonus-flex-item select-zoom'>
							<h4>
								Таблицы
								<br /> лидеров
							</h4>
							<Trophy weight='fill' className='bonus-icon' />
						</NavLink>
					</div>
				</div>
			</div>
			<div className='bonus-preview-block'>
				<div className='element_container'>
					<NavLink to={'./spend'} className='title_container bonus-title'>
						<h3>Потратить</h3>
						<div className='bubble-text'>{shops.length}</div>
						<CaretRight weight='bold' className='icon_mid' />
					</NavLink>
					<div className='bonus-preview-wrapper'>
						{shops.slice(0, 4).map(shop => (
							<ShopPreview key={shop.id} shop={shop} />
						))}
					</div>
				</div>

				<div className='element_container'>
					<NavLink to={'./events'} className='title_container bonus-title'>
						<h3>Мероприятия</h3>
						<div className='bubble-text'>{events.length}</div>
						<CaretRight weight='bold' className='icon_mid' />
					</NavLink>
					<div className='bonus-preview-wrapper'>
						{events.slice(0, 4).map(event => (
							<EventPreview key={event.name} event={event} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Bonuses
