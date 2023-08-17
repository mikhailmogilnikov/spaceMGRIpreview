import {
	Question,
	CaretRight,
	Coins,
	Trophy,
	Receipt,
} from '@phosphor-icons/react'

import '../../styles/scss/bonuses.scss'
import { NavLink } from 'react-router-dom'
import { initialItems } from '../../storage/initItems'
import { useState } from 'react'
import ItemPreview from './ItemPreview'
import { initialEvents } from '../../storage/initEvents'
import EventPreview from './EventsPreview'

const Bonuses = () => {
	const [items, setItems] = useState(initialItems)
	const [events, setEvents] = useState(initialEvents)

	return (
		<div className='block' style={{ padding: '0' }}>
			<div className='bonus-block'>
				<div className='title_container'>
					<h1>Бонусы</h1>
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
					<div className='content_cover large-rounded'>
						<NavLink to={''} className='content_elem_row select'>
							<Question weight='bold' className='icon_mid' />
							<p>Как получить</p>
							<CaretRight weight='bold' className='icon_mid' />
						</NavLink>
					</div>
					<div className='bonus-flex-wrapper'>
						<div className='bonus-flex-item'>
							<h4>
								История
								<br /> операций
							</h4>
							<Receipt weight='fill' className='bonus-icon' />
						</div>
						<div className='bonus-flex-item'>
							<h4>
								Таблицы
								<br /> лидеров
							</h4>
							<Trophy weight='fill' className='bonus-icon' />
						</div>
					</div>
				</div>
			</div>
			<div className='bonus-preview-block'>
				<div className='element_container'>
					<div className='title_container bonus-title'>
						<h3>Потратить</h3>
						<div className='bubble-text'>24</div>
						<CaretRight weight='bold' className='icon_mid' />
					</div>
					<div className='bonus-preview-wrapper'>
						{items.map(item => (
							<ItemPreview item={item} />
						))}
					</div>
				</div>

				<div className='element_container'>
					<div className='title_container bonus-title'>
						<h3>События</h3>
						<div className='bubble-text'>9</div>
						<CaretRight weight='bold' className='icon_mid' />
					</div>
					<div className='bonus-preview-wrapper'>
						{events.map(event => (
							<EventPreview event={event} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Bonuses
