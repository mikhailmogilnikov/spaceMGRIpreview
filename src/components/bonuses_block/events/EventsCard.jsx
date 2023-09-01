import {
	ArrowSquareOut,
	CaretLeft,
	Clock,
	Coins,
	LinkSimple,
	MapPin,
	WarningCircle,
} from '@phosphor-icons/react'
import { NavLink, useNavigate } from 'react-router-dom'
import { currentDate } from '../Bonuses'
import { useState } from 'react'

const EventsCard = ({ event }) => {
	const navigate = useNavigate()

	const [checkIn, setCheckIn] = useState(false)
	const check = () => {
		setCheckIn(true)
	}

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
				<h2>
					{event.name.charAt(0).toUpperCase()}
					{event.name.slice(1)}
				</h2>
				{event.desc && (
					<pre style={{ opacity: '0.5' }}>
						{event.desc.charAt(0).toUpperCase()}
						{event.desc.slice(1)}
					</pre>
				)}
				{event.link && (
					<div className='element_container'>
						<div className='title_container'>
							<h3>Ссылки</h3>
						</div>
						<div className='content_cover'>
							<NavLink
								to={event.link}
								target='_blank'
								rel='noreferrer'
								className='content_elem_row select'
							>
								<LinkSimple weight='bold' className='icon_mid' />
								<p>
									{event.linkName.charAt(0).toUpperCase()}
									{event.linkName.slice(1)}
								</p>
								<ArrowSquareOut weight='bold' className='icon_mid' />
							</NavLink>
						</div>
					</div>
				)}
				<div className='element_container'>
					<div className='title_container'>
						<h3>Информация</h3>
					</div>
					<div className='content_cover'>
						<div className='content_elem_row'>
							<Clock weight='bold' className='icon_min' />
							<pre style={{ opacity: '1', fontWeight: '600' }}>
								{event.date}
								{event.time &&
									`, ${event.time.charAt(0).toLowerCase()}${event.time.slice(
										1
									)}`}
							</pre>
						</div>
						{event.location && (
							<>
								<div className='breaker'></div>
								<div className='content_elem_row'>
									<MapPin weight='bold' className='icon_min' />
									<pre style={{ opacity: '1', fontWeight: '600' }}>
										{event.location.charAt(0).toUpperCase()}
										{event.location.slice(1)}
									</pre>
								</div>
							</>
						)}
						{event.reward && (
							<>
								<div className='breaker'></div>
								<div className='content_elem_row'>
									<Coins weight='bold' className='icon_min' />
									<pre style={{ opacity: '1', fontWeight: '600' }}>
										{event.reward.charAt(0).toUpperCase()}
										{event.reward.slice(1)}
									</pre>
								</div>
							</>
						)}
					</div>
				</div>
				{event.isRewarding ? (
					event.date === currentDate ? (
						<div className='element_container'>
							{checkIn === false ? (
								<div className='button_main' onClick={check}>
									<h4 className='text_button_main'>Отметить посещение</h4>
								</div>
							) : (
								<div className='button-checked'>
									<h4 className='text_lighter'>Посещение учтено</h4>
								</div>
							)}
							<div className='title_container'>
								<p
									className='bottom_text'
									style={{ fontWeight: '500', textAlign: 'center' }}
								>
									Важно: без отметки посещения Вам не смогут начислить награду
									за мероприятие.
								</p>
							</div>
						</div>
					) : (
						<div className='content_cover'>
							<div className='content_elem_row'>
								<WarningCircle weight='bold' className='icon_min low_opacity' />
								<pre>
									Отметить посещение можно только в день проведения мероприятия.
								</pre>
							</div>
						</div>
					)
				) : (
					<div className='content_cover'>
						<div className='content_elem_row'>
							<WarningCircle weight='bold' className='icon_min low_opacity' />
							<pre>За это мероприятие награда не начисляется.</pre>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default EventsCard
