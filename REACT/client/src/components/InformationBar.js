import React, { useContext } from 'react'
import { observer } from "mobx-react-lite"
import { Context } from '../index'
import '../site.css'

const InformationBar = observer(() => {
    const {list} = useContext(Context)
    return (
        <ul className='listBox optionBar'>
            <li 
                onClick={() => {list.setSelectedInformation({})}}
                key="all"
                className={Object.keys(list.selectedInformation).length === 0 ? 'activeElement' : ''} 
                value="all"
            >
                All
            </li>
            {list.informations.map(information => (
                <li 
                    onClick={() => {list.setSelectedInformation(information)}}
                    key={information.id}
                    className={information.id === list.selectedInformation.id ? 'activeElement' : ''} 
                    value={information.id} 
                >
                    {information.animal_class + ' ' + information.species}
                </li>
            ))}
        </ul>
    )
})

export default InformationBar