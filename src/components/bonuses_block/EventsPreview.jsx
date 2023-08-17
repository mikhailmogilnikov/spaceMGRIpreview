const EventPreview = ({ event }) => {
	return (
		<div className='bonus-preview-item'>
			<img src={event.image} alt={event.name} className='bonus-preview-img' />
			<div className='info-wrapper'>
				<h5>{event.name}</h5>
				<p>{event.time}</p>
			</div>
		</div>
	)
}

export default EventPreview
