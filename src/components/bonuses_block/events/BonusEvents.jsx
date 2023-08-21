import { CaretLeft } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

const BonusEvents = () => {
	return ( 
		<div className="block">
		<NavLink to={'/bonuses'} className="title_container back_container">
				<CaretLeft weight="bold" className="icon_mid" />
				<h2>События</h2>
		</NavLink>

		</div>
	 );
}
 
export default BonusEvents;