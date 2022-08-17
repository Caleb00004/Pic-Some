import React from 'react'
import './Image.css'
import heartImg from './heart-line.png'
import addImg from './add-circle-line.png'
import heartFillImg from './heart-fill.png'
import {context} from '../myContext'
import {useContext} from 'react'

function Image(props) {
    const [hovered, setHovered] = React.useState(false) //checks if image is curretly being hovered
    const { toogleIsfavorite, photoArray} = useContext(context) 

    // runs when image mouse pointer is on image
    function handleHover() {
        setHovered(true)
    }

    // runs when image mouse pointer leaves the image
    function handleMouseGone() {
        setHovered(false)
    }

    const cartIcon = hovered && <img src={addImg} className="ri-add-circle-line cart" />
    let heartIcon = null

    // fuction to choose which heartIcon to dispay [filled or notFilled]
    function heartIconLogic() {
        if (photoArray[props.id-1].isFavorite) {
            heartIcon = <img onClick={() => toogleIsfavorite(props.id)} className='ri-heart-line favorite' src={heartFillImg}/>
        } else if(hovered) {
            heartIcon = <img onClick={() => toogleIsfavorite(props.id)} src={heartImg} className="ri-heart-line favorite"/>    
        }
    }  

    hearIconLogic()
    return (
        <div onMouseOver={handleHover} onMouseOut={handleMouseGone} className={`${props.className} image-container`}>
            <img src={props.img.url} className="image-grid"/>
                {heartIcon}
                {cartIcon}


        </div>
    )
}

export default Image