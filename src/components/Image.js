import React from 'react'
import heartImg from './heart-line.png'
import addImg from './add-circle-line.png'
import heartFillImg from './heart-fill.png' 
import cartImg from './shopping-cart-fill.png'
import {context} from '../myContext'
import {useContext} from 'react'
import PropTypes from 'prop-types'
import './Image.css'

function Image(props) {
    const [Ishovered, setIsHovered] = React.useState(false) //checks if image is curretly being hovered
    const { toogleIsfavorite, addToCart, subtractFromCart, cartArray } = useContext(context) //destructing Context

    // runs when image mouse pointer is on image
    function handleHover() {
        setIsHovered(true)
    }

    // runs when image mouse pointer leaves the image
    function handleMouseGone() {
        setIsHovered(false)
    }

    function cartIcon() {
        let itemInCart = cartArray.some((item)=>{ 
            return item.id == props.img.id 
          })
        
        //console.log(itemInCart)
        if (itemInCart) {
            return <img onClick={() => subtractFromCart(props.img) } src={cartImg} className='ri-add-circle-line cart'/>
            } else if(Ishovered) {
            return <img onClick={() => addToCart(props.img)} src={addImg} className="ri-add-circle-line cart" />
        }
    }
    let heartIcon = null

    // fuction to choose which heartIcon to dispay [filled or notFilled]
    function heartIconLogic() {
        if (props.img.isFavorite) {
            heartIcon = <img onClick={() => toogleIsfavorite(props.img.id)} className='ri-heart-line favorite' src={heartFillImg}/>
        } else if(Ishovered) {
            heartIcon = <img onClick={() => toogleIsfavorite(props.img.id)} src={heartImg} className="ri-heart-line favorite"/>    
        }
    }  

    heartIconLogic()
    console.log("ran")
    return (
        <div onMouseOver={handleHover} onMouseOut={handleMouseGone} className={`${props.className} image-container`}>
            <img src={props.img.url} className="image-grid"/>
                {heartIcon}
                {cartIcon()}


        </div>
    )
}

Image.propTypes = {
    className : PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool        
    })
    
}   

export default Image