import { NavLink } from 'react-router-dom'
import { currentDate } from '../Bonuses'

const EventsFullPreview = ({ event }) => {
	return (
		<NavLink
			to={`./${event.id}`}
			key={event.name}
			className='big-item-wrapper select-zoom'
		>
			<img
				id='shopImg'
				src={event.image}
				alt={event.name}
				className='bonus-preview-img'
			/>
			<div className='info-wrapper'>
				<h4>{event.name}</h4>
				<p>{event.date === currentDate ? 'Сегодня' : event.date}</p>
			</div>
		</NavLink>
	)
}

export default EventsFullPreview
