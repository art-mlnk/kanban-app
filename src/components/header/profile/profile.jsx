import UserAvatar from '../../images/user-avatar.png';
import ArrowDown from '../../images/arrow-down.svg';
import css from './profile.module.css'
import {useState} from 'react';

export const Profile = () => {
    const [isMenuShown, setIsMenuShown] = useState(false);

return (
    <div className={css.profile}
         onClick={() => setIsMenuShown(!isMenuShown)}>
        <img className={css.user_avatar} src={UserAvatar}/>
        <div className={`${css.arrow} ${isMenuShown ? css.up : ''}`}>
        <img className={css.arrow_down} src={ArrowDown}/>
        </div>

        {isMenuShown && <div className={css.menu}>
            <button className={css.menu_button}>Profile</button>
            <button className={css.menu_button}>Log Out</button>
        </div>
        }
    </div>
)
}
