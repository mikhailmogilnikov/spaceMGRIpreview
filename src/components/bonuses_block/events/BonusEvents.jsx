import { CaretLeft } from '@phosphor-icons/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { initialEvents } from '../../../storage/initEvents'
import EventsFullPreview from './EventsFullPreview'

const BonusEvents = () => {
	const [events] = useState(initialEvents)
	const navigate = useNavigate()

	return (
		<div className='block'>
			<div
				className='title_container back_container'
				onClick={() => navigate(-1)}
			>
				<CaretLeft weight='bold' className='icon_mid' />
				<h2>События</h2>
			</div>

			<div className='element_container grid-two'>
				{events.map(event => (
					<EventsFullPreview key={event.name} event={event} />
				))}
			</div>
		</div>
	)
}

export default BonusEvents
