import React from 'react'
import { observer } from 'mobx-react-lite'
import '../site.css'
import { useNavigate } from 'react-router-dom'
import { ANIMAL_ROUTE } from '../utils/consts'

const Animal = observer(({animal}) => {
    const history = useNavigate()
    return (
        <div className='gridItem photoCard' onClick={() => history(ANIMAL_ROUTE + '/' + animal.id)}>
            <div><img src={animal.image} alt="Animal's image"></img></div>
            <div><figcaption>{animal.name}</figcaption></div>


        </div>
    )
})

export default Animal