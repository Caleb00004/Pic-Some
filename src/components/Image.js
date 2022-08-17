import React from 'react'
import './Image.css'
import heartImg from './heart-line.png'
import addImg from './add-circle-line.png'
import {context} from '../myContext'
import {useContext} from 'react'

function Image(props) {
    const [hovered, setHovered] = React.useState(false)
    const { toogleIsfavorite, photoArray } = useContext(context)

    function handleHover() {
        setHovered(true)
//        console.log(hovered)
    }

    function handleMouseGone() {
        setHovered(false)
//        console.log(hovered)
    }

//    console.log("ran")

/*    React.useEffect(() => {
        console.log(photoArray)
    }, photoArray) */
    
    return (
        <div onMouseOver={handleHover} onMouseOut={handleMouseGone} className={`${props.className} image-container`}>
            <img src={props.img.url} className="image-grid"/>
            {hovered && 
                <>  
                    <img onClick={() => toogleIsfavorite(props.id)} src={heartImg} className="ri-heart-line favorite"/>
                    <img src={addImg} className="ri-add-circle-line cart" />
                </>
            }   
        </div>
    )
}

export default Image