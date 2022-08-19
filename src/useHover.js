import React from "react"

export default function useHover()  {
    const [isHovered, setisHovered] = React.useState(false) //checks if image is curretly being hovered

    // runs when image mouse pointer is on image
    function handleHover() {
        setisHovered(true)
    }

    // runs when image mouse pointer leaves the image
    function handleMouseGone() {
        setisHovered(false)
    }

    return {isHovered, handleHover, handleMouseGone}
}

