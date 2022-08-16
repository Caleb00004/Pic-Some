import './Header.css'
import {Link, useNavigate} from 'react-router-dom'


function Header() {
    const checkoutPage = useNavigate()
    return (
        <header>
            <Link to='/'><h1>Pic Some</h1></Link>
            <i onClick={() => checkoutPage('/checkout')}  className="ri-shopping-cart-line ri-fw ri-2x"></i>
        </header>
    )
}

export default Header