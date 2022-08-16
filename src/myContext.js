import React, { createContext } from "react";

const context = createContext()

function ContextProvider(props) {
    const [photoArray, setPhotoArray] = React.useState()

    React.useEffect(() => {
        async function fetchPhotos() {
            const response = await fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
            const data = await response.json()
            setPhotoArray(data)
            console.log('inside func')
        }

        fetchPhotos()
    },[])

    console.log('after decare function')
    return (
        <context.Provider value={photoArray}>
            {props.children}
        </context.Provider>
    )
}

export {ContextProvider, context}