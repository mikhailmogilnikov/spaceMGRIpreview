import './styles/main.css'
import './styles/schedule.css'

import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import ScrollToTop from './components/scroll_to_top/ScrollToTop'

import Courses from './components/courses_block/Courses'
import Deadline from './components/deadline_block/Deadline'
import Header from './components/header/Header.js'

import { initialShop } from './storage/initShops'
import ProjectRoutes from './routes/ProjectRoutes'

function App() {
	const location = useLocation()
	const [isLoggedIn, setIsLoggedIn] = useState(true)
	const [shops] = useState(initialShop)

	// Для кнопки выход
	const handleLogout = () => {
		setIsLoggedIn(false)
	}

	// Для кнопки вход
	const handleLogin = () => {
		setIsLoggedIn(true)
	}

	useEffect(() => {
		// Проверка пути URL и установка значения isLoggedIn
		if (
			location.pathname === '/' ||
			location.pathname === '/enter' ||
			location.pathname === '/privacy' ||
			location.pathname === '/faq' ||
			location.pathname === '/credits'
		) {
			setIsLoggedIn(false)
		} else {
			setIsLoggedIn(true)
		}
	}, [location.pathname])

	return (
		<div className='App'>
			<ScrollToTop />

			<div className='main_container'>
				<Header isLoggedIn={isLoggedIn} />

				<main className='content_container'>
					{isLoggedIn && <Courses />}

					<ProjectRoutes
						handleLogin={handleLogin}
						handleLogout={handleLogout}
						shops={shops}
					/>

					{isLoggedIn && <Deadline />}
				</main>
			</div>
		</div>
	)
}

export default App
