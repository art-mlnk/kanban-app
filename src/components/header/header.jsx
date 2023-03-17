import {Profile} from './profile/profile'
import css from './header.module.css'

export const Header = () => {
	return (
		<header className={css.header}>
			<h1 className={css.title}>Awesome Kanban Board</h1>
			<Profile />
		</header>
	)
}
