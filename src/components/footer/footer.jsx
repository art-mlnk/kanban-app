import {LIST_TYPES, LIST_COPY} from '../../config'
import css from './footer.module.css'

export const Footer = (props) => {
	const {tasks} = props
	return (
		<footer className={css.footer}>
			<div className={css.counts}>
				{Object.values(LIST_TYPES).map(type => {
					const listTasks = tasks.filter(task => task.status === type)
					if (!listTasks.length) return null;
					return (
						<p className={css.count} key={LIST_COPY[type]}>{LIST_COPY[type]}: {listTasks.length}</p>
					)
				})}
			</div>
			<div className={css.signature}>
				Created by <a href='https://github.com/art-mlnk' target='_blank' rel='noreferrer'>Artem Melnikov</a>, 2023
			</div>
		</footer>
	)
}