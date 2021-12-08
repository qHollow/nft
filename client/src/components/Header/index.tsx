import { NavLink } from 'react-router-dom';
import './style.css';

const Header = () => {
	return (
		<header className="header">
			<h1>логотип</h1>
			<nav className="header__nav">
				<NavLink to="/" className="header__link">
					Магазин
				</NavLink>
				<NavLink to="/items" className="header__link">
					Мои предметы
				</NavLink>
				<NavLink to="/subsribes" className="header__link">
					Подписки
				</NavLink>
				<NavLink to="/create" className="header__link">
					Создать
				</NavLink>
			</nav>
			<div>тут поиск</div>
			<button>кнопки...</button>
		</header>
	);
};

export default Header;
