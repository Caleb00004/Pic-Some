import {context} from '../myContext'
import React, {useContext} from 'react'
import binImg from './delete-bin-line.png'
import fillBinImg from './delete-bin-5-fill.png'
import './Page-Styles/checkout.css'
import useHover from '../useHover'

function Checkout() {
    const { cartArray, subtractFromCart, clearCart } = useContext(context)
    const [buttonText, setButtonText] = React.useState('Place Order')
    const {isHovered, handleHover, handleMouseGone} = useHover()
    const [binIcon, setBinIcon] = React.useState(binImg)

    const cartItems = cartArray.map(cartItem => (
            <div key={cartItem.id} className='cart-items'>
                <img 
                    onClick={() => subtractFromCart(cartItem)}
                    className='bin-image' height ={'25%'}
                    onMouseOver={handleHover}
                    onMouseOut={handleMouseGone}
                    src={binImg}
                />
                <img width={'20%'} src={cartItem.url}/>
                {/*  <img width={'15%'} height={'100%'} src={cartItem.url}/> */}
                <p>${6.99}</p>
            </div>
        ))
    
    const totalCost = 6.99 * cartArray.length

    function handleOrder() {
        // console.log('handling order')
        setButtonText('ordering..')
        setTimeout(() => {
            setButtonText('order Placed')
            clearCart()
        },3000)
    }
    
    console.log('cart Page')
    return (
        <div className='checkout-page'>
            <h1>Checkout Page</h1>
            {cartItems}
            <br />
            <h3>Total Order: ${totalCost}</h3>
            {cartArray.length > 0 && <button onClick={handleOrder}>{buttonText}</button>}
            {cartArray.length <= 0 && <p>You have no items in Cart</p>}
        </div>
    )
}

export default Checkout