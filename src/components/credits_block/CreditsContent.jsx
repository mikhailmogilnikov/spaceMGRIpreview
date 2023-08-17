import GeoLabsPaint from './GeolabsPaint'

const CreditsContent = () => {
	return (
		<>
			<div className='element_container'>
				<GeoLabsPaint/>
				<div className='title_container' style={{ marginTop: '20px' }}>
					<h3>Создатели</h3>
				</div>
				<div className='content_cover'>
					<div className='content_elem_column'>
						<div className='container_column_start'>
							<h4>Романов Максим</h4>
							<p className='low_opacity' style={{ fontWeight: '500' }}>
								Бэкенд, фронтенд-разработка
							</p>
						</div>
					</div>
				</div>
				<div className='content_cover'>
					<div className='content_elem_column'>
						<div className='container_column_start'>
							<h4>Могильников Михаил</h4>
							<p className='low_opacity' style={{ fontWeight: '500' }}>
								Фронтенд-разработка, веб-дизайн, UI/UX
							</p>
						</div>
					</div>
				</div>
				<div className='content_cover'>
					<div className='content_elem_column'>
						<div className='container_column_start'>
							<h4>Нагайцев Михаил</h4>
							<p className='low_opacity' style={{ fontWeight: '500' }}>
								Творческий руководитель проекта
							</p>
						</div>
					</div>
				</div>
				<div className='title_container'>
					<p className='bottom_text' style={{fontWeight: '500'}}>
						Кафедра информатики и геоинформационных систем{' '}
						<br /> <br /> Российский государственный геологоразведочный
						университет имени Серго Орджоникидзе
					</p>
				</div>
			</div>
		</>
	)
}

export default CreditsContent
