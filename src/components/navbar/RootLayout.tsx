import { Outlet, NavLink } from "react-router-dom"

//styles
import './styles/style.css'

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav className="navbar">
     <ul>
     <li><NavLink  to="/" >Home</NavLink></li>
     <li><NavLink to="/projects">Projects</NavLink></li>
     </ul>
    </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
    
  )
}
