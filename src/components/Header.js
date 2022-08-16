import './Header.css'
import {Link, useNavigate} from 'react-router-dom'
import {context} from '../myContext'
import {useContext} from 'react'

function Header() {
    const contextData = useContext(context)
    console.log(contextData)
    
    const checkoutPage = useNavigate()
    return (
        <header>

            <Link to='/'><h1>Pic Some</h1></Link>
            <i onClick={() => checkoutPage('/checkout')}  className="ri-shopping-cart-line ri-fw ri-2x"></i>
        </header>
    )
}

export default Header