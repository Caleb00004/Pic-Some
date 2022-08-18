import React, { createContext } from "react";

const context = createContext()

function ContextProvider(props) {
    const [photoArray, setPhotoArray] = React.useState()
    const [imgExist, setImgExist] = React.useState(false)
    const [cartArray, setCartArray] = React.useState([])

    // fecthing image data.
    React.useEffect(() => {
        async function fetchPhotos() {
            const response = await fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
            const data = await response.json()
            setImgExist(true)
            setPhotoArray(data)
            console.log('inside func')
        }

        fetchPhotos()
    },[])

    function addToCart(imgItem) {
        setCartArray(prevState => (
            [...prevState, imgItem]
        ))
    }

    function subtractFromCart(imgItem) {
        setCartArray(prevState => {
            let newArray = prevState.filter(item => (
                item.id != imgItem.id
            ))

            return (newArray)
        })
    }

    // function to toggle isFavorite property in photoArray state
    function toogleIsfavorite(id) {
        console.log(id)
        setPhotoArray(prevState => {
            const mapState = prevState.map(imgObj => (
                imgObj.id == id ? {...imgObj, isFavorite : !imgObj.isFavorite} : imgObj
            ))

            return ( mapState )
            
        })
    }

//    console.log('after decare function')
//    console.log(photoArray)
//    console.log(cartArray)
    return (
        <context.Provider value={{photoArray, toogleIsfavorite , imgExist, addToCart, cartArray, subtractFromCart}}>
            {props.children}
        </context.Provider>
    )
}

export {ContextProvider, context}