import DeadlineInner from './DeadlineInner'
import { ClockCountdown } from '@phosphor-icons/react'

const Deadline = () => {
	return (
		<div className='block'>
			<div className='element_container'>
				<div className='title_container'>
					<ClockCountdown weight='fill' className='icon_min' />
					<h3>Закреплено</h3>
				</div>
				<DeadlineInner />
			</div>
		</div>
	)
}

export default Deadline
