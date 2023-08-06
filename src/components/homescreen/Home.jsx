import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import SchedulePreview from './SchedulePreview'
import ListItem from './ListItem'
import CoursePreview from './CoursePreview'
import TaskPreview from './TaskPreview'

const Home = () => {
	useEffect(() => {
		const headerButton = document.querySelector('.header-button')
		window.addEventListener('scroll', handleScroll)

		function handleScroll() {
			const scrollY = window.scrollY
			if (scrollY >= 600 & scrollY <= 6200) {
				headerButton.classList.add('visible')
			} else {
				headerButton.classList.remove('visible')
			}
		}

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div to={'/enter'} className='home-container'>
			<NavLink to={'/enter'} className='header-button'>
				<h4 className='header-button-text'>Войти</h4>
			</NavLink>
			<div className='big-letters-wrapper'>
				<h2 className='big-letters'>Достигать целей.</h2>
				<h2 className='big-letters'>Быстрее.</h2>
			</div>

			<div className='small-letters-wrapper'>
				<h3 className='small-letters low_opacity'>
					Space дает студентам возможность по-новому взглянуть на
					электронно-образовательную платформу МГРИ.
				</h3>
			</div>

			<div className='action-button-wrapper'>
				<div className='action-button-container'>
					<NavLink to={'/enter'} className='button_main'>
						<h4 className='text_button_main'>Начать работу</h4>
					</NavLink>
				</div>
			</div>

			<div className='small-letters-wrapper' style={{ paddingTop: '70px' }}>
				<div className='vert-line'></div>
			</div>

			<div className='content-block'>
				<div className='content-element'>
					<div className='content-part'>
						<h4 className='content-title'>Расписание под рукой</h4>
						<p className='small-letters low_opacity text-center'>
							При входе в приложение вы сразу увидите ближайшие пары на сегодня
							и до конца недели.
						</p>
					</div>
				</div>
				<div className='content-element under-title'>
					<div className='content-part right-pos schedule-break'>
						<div className='fader'></div>
						<SchedulePreview />
					</div>
					<div className='content-part left-pos text-mid'>
						<ListItem
							icon='FireSimple'
							title='Переработанный интерфейс'
							description='Измененное расположение элементов и фокус на важном помогут лучше воспринимать информацию. Зеленый индикатор возле времени подскажет, что пара уже началась.'
						/>
						<ListItem
							icon='ClockClockwise'
							title='Взгляд в прошлое. И будущее'
							description='В календаре можно посмотреть расписание на любой день учебного года.'
						/>
						<ListItem
							icon='PaintBrush'
							title='Сохранение акцентов'
							description='Привычные цвета для обозначения типа занятия остались. Слегка более подобранные.'
						/>
					</div>
				</div>
			</div>

			<div className='small-letters-wrapper' style={{ paddingTop: '70px' }}>
				<div className='vert-line'></div>
			</div>

			<div className='content-block'>
				<div className='content-element'>
					<div className='content-part'>
						<h4 className='content-title'>Новое видение курсов</h4>
						<p className='small-letters low_opacity text-center'>
							Два действия чтобы увидеть статус выполнения всех заданий. Space
							переизобретает пользовательский опыт stud.
						</p>
					</div>
				</div>
				<div className='content-element under-title'>
					<div className='content-part left-pos text-mid'>
						<ListItem
							icon='StarFour'
							title='Ничего лишнего'
							description='Закрепите только нужные курсы. Остальные будут скрыты.'
						/>
						<ListItem
							icon='PencilSimple'
							title='Меняйте, как удобно'
							description='Переименуйте каждый закрепленный курс по своему вкусу. Больше никаких лишних символов.'
						/>
						<ListItem
							icon='ClockCountdown'
							title='Ближайшие дедлайны'
							description='Space сортирует и показывает задания, к которым скоро не будет возможности прикрепить решение. Чем ближе к закрытию, тем выше в списке.'
						/>
					</div>
					<div
						className='content-part schedule-break left-pos'
						style={{ 'justify-content': 'start' }}
					>
						<div className='fader'></div>
						<CoursePreview />
					</div>
				</div>
			</div>

			<div className='small-letters-wrapper' style={{ paddingTop: '70px' }}>
				<div className='vert-line'></div>
			</div>

			<div className='content-block'>
				<div className='content-element'>
					<div className='content-part'>
						<h4 className='content-title'>Большие возможности</h4>
						<p className='small-letters low_opacity text-center'>
							Space напрямую взаимодействует с электронно-образовательной
							платформой, что позволяет не только брать данные, но и отправлять
							собственные.
						</p>
					</div>
				</div>
				<div className='content-element under-title'>
					<div className='content-part right-pos task-break'>
						<div className='fader' style={{ height: '300px' }}></div>
						<TaskPreview />
					</div>
					<div className='content-part left-pos text-mid'>
						<ListItem
							icon='CloudArrowUp'
							title='Прикрепление файлов'
							description='Добавляйте решения, удаляйте старые – ограничений нет. Можно прикреплять как файлы, так и ссылки.'
						/>
						<ListItem
							icon='DownloadSimple'
							title='Скачивание и предпросмотр'
							description='Любые файлы и ссылки можно загрузить или по возможности открыть прямо в браузере.'
						/>
						<ListItem
							icon='Files'
							title='Материалы курса'
							description='Для удобства использования, добавленные преподавателями материалы доступны без ограничений как в курсе, так и в любом задании.'
						/>
						{/* <ListItem
							icon='ClockAfternoon'
							title='Время не ограничено'
							description='Если у задания не прошел срок выполнения – Space покажет время до его закрытия.'
						/> */}
						<ListItem
							icon='MoonStars'
							title='Оформление на свой вкус'
							description='Можете переключаться между светлым и тёмным оформлением, а так же включать звездное небо.'
						/>
					</div>
				</div>
			</div>

			<div className='small-letters-wrapper' style={{ paddingTop: '70px' }}>
				<div className='vert-line'></div>
			</div>

			<div className='content-part' style={{ paddingTop: '70px' }}>
				<h4 className='content-title'>Начать сейчас.</h4>
			</div>
			<div className='action-button-wrapper' style={{ paddingBottom: '70px' }}>
				<div className='action-button-container'>
					<NavLink to={'/enter'} className='button_main'>
						<h4 className='text_button_main'>Войти</h4>
					</NavLink>
				</div>
			</div>
		</div>
	)
}

export default Home
