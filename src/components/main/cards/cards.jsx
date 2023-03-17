import { v4 as uuidv4 } from 'uuid';
import {LIST_TYPES, LIST_COPY} from '../../../config'
import {List} from './list/list'
import css from './cards.module.css'

export const Cards = (props) => {
	const {tasks, setTasks} = props

	const addNewTask = (title, description) => {
		const task = {
			id: uuidv4(),
			title,
			description,
			created: new Date().toISOString(),
			status: 'backlog',
		}

		setTasks([...tasks, task]);
	}

	return (
		<div className={css.cards}>
		{
			Object.values(LIST_TYPES).map(type => {
				const listTasks = tasks.filter(task => task.status === type)
				return (
					<List
						key={LIST_COPY[type]}
						type={type}
						title={LIST_COPY[type]}
						tasks={listTasks || []}
						addNewTask={addNewTask}
					/>
				)
			})
		}
		</div>
	)
}