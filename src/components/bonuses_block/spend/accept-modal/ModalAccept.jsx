import { X } from '@phosphor-icons/react'
import { CSSTransition } from 'react-transition-group'
import AcceptAnimation from './AcceptAnimation'

const ModalAccept = ({ setModalAccept, isModalAccept }) => {
	return (
		<div className='modal_wrapper'>
			<CSSTransition
				in={isModalAccept}
				classNames={'modal_bg_anim'}
				timeout={200}
				unmountOnExit
			>
				<div onClick={setModalAccept} className='modal_bg'></div>
			</CSSTransition>

			<CSSTransition
				in={isModalAccept}
				timeout={500}
				classNames={'modal-accept'}
				unmountOnExit
			>
				<div className='modal-accept-wrapper'>
					<div className='modal-accept-text-wrapper'>
						<AcceptAnimation />
						<h3 className='modal-accept-text'> Подтверждено.</h3>
						<p className='modal-accept-text-under'>
							Информация о заказе находится в разделе "История операций"
						</p>
					</div>
				</div>
			</CSSTransition>
		</div>
	)
}

export default ModalAccept
