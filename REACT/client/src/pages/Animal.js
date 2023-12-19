import React, { useContext } from 'react'
import { Context } from '../index'
import '../site.css'
import { useParams } from 'react-router-dom';

const Animal = () => {
    const {id} = useParams();
    const {list} = useContext(Context)

    const animal = list.animals.find(animal => animal.id == id)
    const placement = list.placements.find(placement => placement.id === animal.placementId)
    const information = list.informations.find(information => information.id === animal.informationId)

    return (
        <div className='information' style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
            <img src={animal.image} alt="Animal's image"></img>
            <table className='table'>
                <tbody>
                    <tr>
                        <td>Name: </td>
                        <td>{animal.name}</td>
                    </tr>
                    <tr>
                        <td>Placement: </td>
                        <td>{placement.name}</td>
                    </tr>
                    <tr>
                        <td>Type: </td>
                        <td>{information.species}</td>
                    </tr>
                    <tr>
                        <td>Animal class: </td>
                        <td>{information.animal_class}</td>
                    </tr>
                    <tr>
                        <td>Description: </td>
                        <td>{animal.description}</td>
                    </tr>
                    <tr hidden>
                        <td>Birth date: </td>
                        <td>{animal.birth}</td>
                    </tr>
                    <tr>
                        <td>Admission date: </td>
                        <td>{animal.admission}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Animal