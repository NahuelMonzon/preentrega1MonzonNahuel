import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget.jsx'
import { Link, NavLink } from 'react-router-dom'

export function NavBar()
{
    return (
        <>
            <nav>
                <Link to={'/'}>
                    Tienda de Carcasas
                </Link>
                <NavLink to={'/category/Iphone'} className={({ isActive }) => isActive ? "active" : ""}>
                    Iphone
                </NavLink>
                <NavLink to={'/category/Samsung'} className={({ isActive }) => isActive ? "active" : ""}>
                    Samsung
                </NavLink>
                <NavLink to={'/category/Motorola'} className={({ isActive }) => isActive ? "active" : ""}>
                    Motorola
                </NavLink>
                <NavLink to={'/category/Others'} className={({ isActive }) => isActive ? "active" : ""}>
                    Others
                </NavLink>
            </nav>
            <CartWidget />
        </>
    )
}