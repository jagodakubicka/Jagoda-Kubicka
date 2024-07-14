import { NavLink } from 'react-router-dom';

//styles
import './styles/style.css';

export default function Navbar() {
  return (
    <header>
      <nav className='navbar'>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/projects'>Projects</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
