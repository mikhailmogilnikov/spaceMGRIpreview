import {
	UsersThree,
	At,
	Sun,
	Moon,
	StarAndCrescent,
	GearFine,
	CaretRight,
	ArrowSquareOut,
	AsteriskSimple,
	Question,
	LinkSimple,
	GlobeSimple,
	Code,
} from '@phosphor-icons/react'

import { NavLink } from 'react-router-dom'

const Menu = ({ handleLogout }) => {
	return (
		<div className='block'>
			<div className='title_container'>
				<h1>Меню</h1>
			</div>

			<div className='element_container'>
				<div className='title_container'>
					<h3>Профиль</h3>
				</div>
				<div className='content_cover'>
					<div className='content_elem_column'>
						<h3>Могильников Михаил Андреевич</h3>
						<div className='column_container_mini low_opacity'>
							<div className='container_row_start'>
								<UsersThree weight='bold' className='icon_min' />
								<p>ПИ-20</p>
							</div>
							<div className='container_row_start'>
								<At weight='bold' className='icon_min' />
								<p>mikhail.mogilnikov02@gmail.com</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='element_container'>
				<div className='title_container'>
					<h3>Настройки</h3>
				</div>

				<div className='content_cover'>
					<div className='content_elem_column'>
						<p>Оформление</p>
						<div className='container_row_start'>
							<div className='theme_item_container'>
								<div className='theme_circle'>
									<Sun weight='bold' className='icon_big' />
								</div>
								<p className='theme_text'>Светлое</p>
							</div>

							<div className='theme_item_container'>
								<div className='theme_circle'>
									<Moon weight='bold' className='icon_big' />
								</div>
								<p className='theme_text'>Тёмное</p>
							</div>

							<div className='theme_item_container'>
								<div className='theme_circle enabled_invert'>
									<StarAndCrescent weight='bold' className='icon_big' />
								</div>
								<p className='theme_text theme_enabled_text'>Системное</p>
							</div>
						</div>
					</div>
				</div>

				<div className='content_cover'>
					<div className='content_elem_row'>
						<p>Показывать количество непрочитанных писем</p>
						<div className='switcher_body'>
							<div className='switcher'></div>
						</div>
					</div>
				</div>
				<div className='content_cover'>
					<div className='content_elem_row'>
						<p>Анимированный фон</p>
						<div className='switcher_body'>
							<div className='switcher'></div>
						</div>
					</div>

					<div className='breaker'></div>

					<div className='content_elem_row'>
						<p>Плавные переходы</p>
						<div className='switcher_body'>
							<div className='switcher'></div>
						</div>
					</div>
				</div>

				<div className='content_cover'>
					<NavLink to='/settings' className='content_elem_row select'>
						<GearFine weight='bold' className='icon_mid' />
						<p>Настроить курсы</p>
						<CaretRight weight='bold' className='icon_mid' />
					</NavLink>
				</div>
			</div>

			<div className='element_container'>
				<div className='title_container'>
					<h3>Дополнительно</h3>
				</div>

				<div className='content_cover'>
					<NavLink to='/faq_logged' className='content_elem_row select'>
						<Question weight='bold' className='icon_mid' />
						<p>Помощь и возможности</p>
						<CaretRight weight='bold' className='icon_mid' />
					</NavLink>

					<div className='breaker'></div>

					<NavLink to='/credits_logged' className='content_elem_row select'>
						<Code weight='bold' className='icon_mid' />
						<p>Авторы</p>
						<CaretRight weight='bold' className='icon_mid' />
					</NavLink>

					<div className='breaker'></div>

					<NavLink to='/privacy_logged' className='content_elem_row select'>
						<AsteriskSimple weight='bold' className='icon_mid' />
						<p>Политика конфиденциальности</p>
						<CaretRight weight='bold' className='icon_mid' />
					</NavLink>

					<div className='breaker'></div>

					<NavLink
						to='https://mgri.ru'
						target='_blank'
						rel='noreferrer'
						className='content_elem_row select'
					>
						<LinkSimple weight='bold' className='icon_mid' />
						<p>Веб-сайт МГРИ</p>
						<ArrowSquareOut weight='bold' className='icon_mid' />
					</NavLink>

					<div className='breaker'></div>

					<NavLink
						to='https://stud.mgri.ru'
						target='_blank'
						rel='noreferrer'
						className='content_elem_row select'
					>
						<GlobeSimple weight='bold' className='icon_mid' />
						<p>Электронно-образовательная платформа</p>
						<ArrowSquareOut weight='bold' className='icon_mid' />
					</NavLink>
				</div>
			</div>

			<NavLink to='/' onClick={handleLogout} className='exit_button'>
				<h4 className='exit_text'>Выйти</h4>
			</NavLink>
		</div>
	)
}

export default Menu
