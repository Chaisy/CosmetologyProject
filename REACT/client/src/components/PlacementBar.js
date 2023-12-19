import React, { useContext } from 'react'
import { observer } from "mobx-react-lite"
import { Context } from '../index'
import '../site.css'

const PlacementBar = observer(() => {
    const {list} = useContext(Context)
    return (
        <ul className='listBox optionBar'>
            <li 
                onClick={() => {list.setSelectedPlacement({})}}
                key="all"
                className={Object.keys(list.selectedPlacement).length === 0 ? 'activeElement' : ''} 
                value="all"
            >
                All
            </li>
            {list.placements.map(placement => (
                <li 
                    onClick={() => {list.setSelectedPlacement(placement)}}
                    key={placement.id}
                    className={placement.id === list.selectedPlacement.id ? 'activeElement' : ''} 
                    value={placement.id} 
                >
                    {placement.name}
                </li>
            ))}
        </ul>
    )
})

export default PlacementBar

