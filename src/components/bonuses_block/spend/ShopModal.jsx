import { Coins, X } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import ModalAccept from './accept-modal/ModalAccept'

const ShopModal = ({
	serviceIndex,
	services,
	setActiveModal,
	setIsOpenAllowed,
}) => {
	const [service, setService] = useState(services[serviceIndex])

	useEffect(() => {
		changeService()
	}, [serviceIndex])

	const changeService = () => {
		if (serviceIndex !== null) {
			setService(services[serviceIndex])
		}
	}

	const closeModal = () => {
		setTimeout(() => {
			setActiveModal(null)
			setService(services[serviceIndex])
		})
	}

	const isModal = serviceIndex !== null

	const [isModalAccept, setIsModalAccept] = useState(false)

	const setModalAccept = () => {
		setIsModalAccept(!isModalAccept)
	}

	const confirmPayment = () => {
		closeModal()
		setIsOpenAllowed(false)
		setTimeout(() => {
			setModalAccept()
			setIsOpenAllowed(true)
		}, 1000)
	}

	return (
		<div className='modal_wrapper'>
			<CSSTransition
				in={isModal}
				classNames={'modal_bg_anim'}
				timeout={200}
				unmountOnExit
			>
				<div onClick={closeModal} className='modal_bg'></div>
			</CSSTransition>

			<CSSTransition
				in={isModal}
				timeout={1000}
				classNames={'modal_anim'}
				unmountOnExit
			>
				<div className='modal bonus-modal'>
					<div className='title_container'>
						<h1 className='modal_title_text'>Подтверждение покупки</h1>
						<X
							onClick={closeModal}
							weight='bold'
							className='icon_mid pointer'
							size={'28px'}
						/>
					</div>
					<div className='element_container'>
						<div className='content_cover large-rounded'>
							<div className='content_elem_column'>
								<h3>{service?.service}</h3>
								<div className='lighter not_checked'>
									<Coins weight='bold' className='icon_min icon-service' />
									<p>{service?.price}</p>
								</div>
							</div>
						</div>

						<div className='bonus-modal-content'>
							<div className='fader-top'></div>
							{service?.info && (
								<pre style={{ padding: '14px 10px' }}>{service.info}</pre>
							)}
							<div className='fader-bottom'></div>
						</div>
						<div className='button_main' onClick={confirmPayment}>
							<h4 className='text_button_main'>Приобрести</h4>
						</div>
					</div>
				</div>
			</CSSTransition>
			<ModalAccept
				isModalAccept={isModalAccept}
				setModalAccept={setModalAccept}
			/>
		</div>
	)
}

export default ShopModal
