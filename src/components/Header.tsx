import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Header() {
  return (
    <nav className='nav'>
      <Link to='/' className='icon'>
        NASA APIs
      </Link>
      <ul className='nav-list'>
        <li className='nav-link'><CustomLink to='/'>Home</CustomLink></li>
        <li className='nav-link'><CustomLink to='/earth'>Earth</CustomLink></li>
        <li className='nav-link'><CustomLink to='/mars'>Mars</CustomLink></li>
      </ul>
    </nav>
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
