import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import Logo from '../assets/nasa-logo.svg';

export default function Header() {
  return (
    <header>
      <div className='logo'>
        <div>
          <Link to='/' className='logo-image'> <img src={ Logo }></img></Link>
        </div>
        <div>
          <Link to='/' className='logo-title'> Nasa News </Link>
        </div>
      </div>
      <nav className='nav-bar'>
        <ul className='nav-list'>
          <CustomLink to='/'><li className='nav-link'>Home</li></CustomLink>
          <CustomLink to='/earth'><li className='nav-link'>Earth</li></CustomLink>
          <CustomLink to='/mars'><li className='nav-link'>Mars</li></CustomLink>
        </ul>
      </nav>
    </header>
  )
}

function CustomLink({ to, children, ...props }: { to: string; children: React.ReactNode }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
