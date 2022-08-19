import Image from '../components/Image'
import {context} from '../myContext'
import {useContext} from 'react'
import {getClass} from '../utils/gridFunction'
import './Page-Styles/photos.css'

function Photos () {
    const {photoArray, imgExist} = useContext(context)

    return (
        <div className="photos-page">
        {    
            imgExist && photoArray.map((img , i) => (
            <Image key={img.id} img={img} className={getClass(i)} />
            )) 
        }
        </div>
    )
}

export default Photos

/*
{imgExist && 
    <div className='row'>
        <div className='column'>
            <img width='20%' src={photoArray[1].url}/>
            <img width='20%' src={photoArray[2].url}/>
            <img width='20%' src={photoArray[3].url}/>
            <img width='20%' src={photoArray[4].url}/>
            <img width='20%' src={photoArray[5].url}/>
            <img width='20%' src={photoArray[6].url}/>
            <img width='20%' src={photoArray[7].url}/>
            <img width='20%' src={photoArray[8].url}/>
            <img width='20%' src={photoArray[9].url}/>
        </div>
    </div>
}   
*/