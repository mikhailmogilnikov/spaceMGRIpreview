import { CaretLeft } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

const BonusLeaderboard = () => {
	return ( 
		<div className="block">
		<NavLink to={'/bonuses'} className="title_container back_container">
				<CaretLeft weight="bold" className="icon_mid" />
				<h2>Таблицы лидеров</h2>
		</NavLink>

		</div>
	 );
}
 
export default BonusLeaderboard;