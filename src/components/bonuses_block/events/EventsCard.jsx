import { CaretLeft, MapPin } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'

const EventsCard = ({ event }) => {
	const navigate = useNavigate()
	return (
		<div className='block bonus-block-card'>
			<div
				className='bonus-back-button select-zoom'
				onClick={() => navigate(-1)}
			>
				<CaretLeft weight='bold' className='icon_big' />
				<h4>Назад</h4>
			</div>
			<img
				src={event.image}
				alt={event.name}
				className='bonus-card-big-img'
				style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}
			/>
			<div className='bonus-block bonus-card-wrapper'>
				<h2>{event.name}</h2>
				{event.desc && <pre>{event.desc}</pre>}
				{event.location && (
					<div className='element_container'>
						<div className='content_cover'>
							<div className='content_elem_row'>
								<MapPin weight='bold' className='icon_min low_opacity' />
								<pre>{event.location}</pre>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default EventsCard
