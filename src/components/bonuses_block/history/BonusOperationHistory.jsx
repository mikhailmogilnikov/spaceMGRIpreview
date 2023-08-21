import { CaretLeft } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

const BonusOperationHistory = () => {
	return ( 
		<div className="block">
		<NavLink to={'/bonuses'} className="title_container back_container">
				<CaretLeft weight="bold" className="icon_mid" />
				<h2>История операций</h2>
		</NavLink>

		</div>
	 );
}
 
export default BonusOperationHistory;