import React, { useState } from 'react';
import css from './list.module.css';
import { LIST_TYPES } from '../../../../config';
import { Link } from 'react-router-dom';

export const List = props => {
	const { type, title, tasks, addNewTask } = props;
	const [values, setValues] = useState({
		title: '',
		description: '',
	});
	const [isFormVisible, setFormVisible] = useState(false);

	const handleChange = e => {
		const fieldName = e.target.name;
		setValues({ ...values, [fieldName]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (values.title) {
			addNewTask(values.title, values.description);
			setValues({ title: '', description: '' });
			setFormVisible(false);
		}
	};

	const handleAddNewClick = () => {
		setFormVisible(!isFormVisible);
	};

	return (
		<div className={css.list}>
			<h2 className={css.listTitle}>{title}</h2>
			{tasks.length ? (
				tasks.map(task => (
					<Link to={`/tasks/${task.id}`} key={task.id}>
						<div className={css.task}>{task.title}</div>
					</Link>
				))
			) : (
				<p>No tasks added yet</p>
			)}
			{type === LIST_TYPES.BACKLOG && (
				<>
					<button
						onClick={handleAddNewClick}
						className={css.addButton}
					>
						+ Add card
					</button>
					{isFormVisible && (
						<form onSubmit={handleSubmit} className={css.form-title}>
							<input
								type="text"
								name="title"
								value={values.title}
								onChange={handleChange}
								required
								/>
							<button type="submit">Submit</button>
						</form>
						)
					}		
				</>
				
			)}
		</div>
	);
};

