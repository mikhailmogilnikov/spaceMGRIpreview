import { Route, Routes } from 'react-router-dom'

import Enter from '../components/enter_block/Enter'
import FaqUnlogged from '../components/faq_block/FaqUnlogged'
import Home from '../components/homescreen/Home.jsx'
import PrivacyUnlogged from '../components/privacy_block/PrivacyUnlogged'
import CreditsUnlogged from '../components/credits_block/CreditsUnlogged'
import Schedule from '../components/schedule_block/Schedule'
import Menu from '../components/menu_block/Menu'
import Course from '../components/course_block/Course'
import CoursesTablet from '../components/courses_block/CoursesTablet'
import Bonuses from '../components/bonuses_block/Bonuses'
import Task from '../components/task_block/Task'
import Settings from '../components/settings_block/Settings'
import PrivacyLogged from '../components/privacy_block/PrivacyLogged'
import FaqLogged from '../components/faq_block/FaqLogged'
import CreditsLogged from '../components/credits_block/CreditsLogged'
import LoaderBlock from '../components/loader/LoaderBlock'
import HowToGetBonus from '../components/bonuses_block/how-to-get/HowToGetBonus'
import BonusOperationHistory from '../components/bonuses_block/history/BonusOperationHistory'
import BonusLeaderboard from '../components/bonuses_block/leaderboard/BonusLeaderboard'
import BonusSpend from '../components/bonuses_block/spend/BonusSpend'
import BonusEvents from '../components/bonuses_block/events/BonusEvents'
import ShopCard from '../components/bonuses_block/spend/ShopCard'

const ProjectRoutes = ({ handleLogin, handleLogout, shops }) => {
	return (
		<Routes>
			{/* Неавторизованные пути */}
			<Route path='/' element={<Home />} />
			<Route path='/enter' element={<Enter handleLogin={handleLogin} />} />
			<Route path='/privacy' element={<PrivacyUnlogged />} />
			<Route path='/faq' element={<FaqUnlogged />} />
			<Route path='/credits' element={<CreditsUnlogged />} />

			{/* Авторизованные пути */}
			<Route path='/schedule' element={<Schedule />} />
			<Route path='/menu' element={<Menu handleLogout={handleLogout} />} />
			<Route path='/course' element={<Course />} />
			<Route path='/courses' element={<CoursesTablet />} />
			<Route path='/bonuses' element={<Bonuses />} />
			<Route path='/task' element={<Task />} />
			<Route path='/settings' element={<Settings />} />
			<Route path='/privacy_logged' element={<PrivacyLogged />} />
			<Route path='/faq_logged' element={<FaqLogged />} />
			<Route path='/credits_logged' element={<CreditsLogged />} />
			<Route path='/loader' element={<LoaderBlock />} />

			<Route path='/bonuses/faq' element={<HowToGetBonus />} />
			<Route path='/bonuses/history' element={<BonusOperationHistory />} />
			<Route path='/bonuses/leaderboard' element={<BonusLeaderboard />} />
			<Route path='/bonuses/spend' element={<BonusSpend />} />
			<Route path='/bonuses/events' element={<BonusEvents />} />
			
			{shops.map(shop => (
				<Route
					path={`/bonuses/spend/${shop.id}`}
					key={shop.id}
					element={<ShopCard key={shop.id} shop={shop} />}
				/>
			))}
		</Routes>
	)
}

export default ProjectRoutes
