import React, { useContext } from 'react'
import { observer } from "mobx-react-lite"
import { Context } from '../index'
import '../site.css'
import Animal from '../components/Animal'

function AnimalList() {
    const { list } = useContext(Context);

    return (
        <div className='gridContainer' >
            {list.animals.map(animal => (
                <Animal key={animal.id} animal={animal} />
            ))}
        </div>
    );
}

export default observer(AnimalList);