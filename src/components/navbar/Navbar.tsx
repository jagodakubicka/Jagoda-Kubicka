import { Link } from "react-router-dom"

//styles
import './styles/style.css'

export default function Navbar() {
  return (
    <div className="navbar">
     <ul>
     <li><Link  to="/" >Home</Link></li>
     <li><Link to="/projects">Projects</Link></li>
     </ul>
    </div>
  )
}
