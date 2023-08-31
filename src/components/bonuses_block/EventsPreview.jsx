import { NavLink } from 'react-router-dom'

const EventPreview = ({ event }) => {
	return (
		<NavLink
			to={`./events/${event.id}`}
			key={event.name}
			className='bonus-preview-item'
		>
			<img src={event.image} alt={event.name} className='bonus-preview-img' />
			<div className='info-wrapper'>
				<h5>{event.name}</h5>
				<p>{event.date === '24.09.2023' ? 'Сегодня' : event.date}</p>
			</div>
		</NavLink>
	)
}

export default EventPreview
