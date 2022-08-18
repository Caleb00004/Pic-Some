import './Header.css'
import {Link, useNavigate} from 'react-router-dom'
import {context} from '../myContext'
import {useContext} from 'react'

function Header() {
    const { cartArray } = useContext(context)
//    console.log(contextData)

    const checkoutPage = useNavigate() 
    
    function classIcon () {
        if (cartArray.length > 0) {
            return "ri-shopping-cart-fill ri-fw ri-2x"
        } else {
            return "ri-shopping-cart-line ri-fw ri-2x"
        }
    }

    return (
        <header>

            <Link to='/'><h1>Pic Some</h1></Link>
            <i onClick={() => checkoutPage('/checkout')}  className={classIcon()}></i>
        </header>
    )
}

export default Header