import {Cards} from './cards/cards'
import css from './main.module.css'
import {Routes, Route} from "react-router-dom";
import {TaskDetail} from './task-detail/task-detail';

export const Main = (props) => {

	return (
		<main className={css.main}>
			<Routes>
				<Route exact path={'/'} element ={<Cards {...props}/>}/>
				<Route path={'/tasks/:taskId'} element={<TaskDetail {...props}/>}/>
			</Routes>
		</main>
	)
}
