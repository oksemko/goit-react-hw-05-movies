import { NavLink } from 'react-router-dom';
import { Container } from './Navigation.styled'
import { Nav, MenuItem } from './Navigation.styled.jsx';
import css from './Navigation.module.css';


export const Navigation = () => {
  return (
    <Container>
      <nav>
        <Nav>
          <MenuItem>
            <NavLink
              to="/"
              className={({ isActive }) =>
                !isActive ? `${css.link}` : `${css.activeLink}`
              }
            >
              Home
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                !isActive ? `${css.link}` : `${css.activeLink}`
              }
            >
              Movies
            </NavLink>
          </MenuItem>
        </Nav>
      </nav>
    </Container>
  );
};
