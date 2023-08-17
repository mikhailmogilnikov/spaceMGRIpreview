import DeadlineInner from '../deadline_block/DeadlineInner'
import CoursesInner from './CoursesInner'

import { ClockCountdown } from '@phosphor-icons/react'

const CoursesTablet = () => {
	return (
		<div className='element_container' style={{ gap: '20px' }}>
			<div className='block'>
				<CoursesInner />
				<div className='element_container' style={{ gap: '20px' }}>
					<div className='title_container'>
						<ClockCountdown weight='bold' className='icon_min' />
						<h3>Ближайшие дедлайны</h3>
					</div>
					<DeadlineInner />
				</div>
			</div>
		</div>
	)
}

export default CoursesTablet
