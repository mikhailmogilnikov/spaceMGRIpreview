import DeadlineInner from './DeadlineInner'

const Deadline = ({ isLoggedIn }) => {
	return (
		<div className='block edge_block'>
			<div className='title_container'>
				<h1>Ближайшие дедлайны</h1>
			</div>
			<DeadlineInner />
		</div>
	)
}

export default Deadline
