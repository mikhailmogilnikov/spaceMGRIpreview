import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
	useEffect(() => {
		const headerButton = document.querySelector('.header-button')
		window.addEventListener('scroll', handleScroll)

		function handleScroll() {
			const scrollY = window.scrollY
			if (scrollY >= 600) {
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
				<h2 className='big-letters'>Достигать цели.</h2>
				<h2 className='big-letters'>Быстрее.</h2>
			</div>

			<div className='small-letters-wrapper'>
				<h3 className='small-letters low_opacity'>
					Space дает студентам возможность по-новому взглянуть на привычную
					образовательную платформу stud.
				</h3>
			</div>

			<div className='action-button-wrapper'>
				<div className='action-button-container'>
					<NavLink to={'/enter'} className='button_main'>
						<h4 className='text_button_main'>Начать работу</h4>
					</NavLink>
				</div>
			</div>

			<div className='small-letters-wrapper'>
				<div className='vert-line'></div>
			</div>

			<div className='content-block'>
				<div className='content-element'>
					<div className='content-part'>
						<h4 className='content-title'>Расписание под рукой</h4>
						<p className='small-letters low_opacity'>
							При входе в приложение вы сразу увидите ближайшие пары на сегодня
							и до конца недели.
						</p>
					</div>
				</div>
				<div className='content-element'>
					<div className='content-part'></div>
					<div className='content-part'></div>
				</div>
			</div>
		</div>
	)
}

export default Home
