import React, { useContext, useEffect } from 'react'
import '../site.css'
import InformationBar from '../components/InformationBar'
import PlacementBar from '../components/PlacementBar'
import AnimalList from '../components/AnimalList'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { getAnimals, getInformations, getPlacements } from '../http/listApi'
import Pager from '../components/Pager'
import Searcher from '../components/Searcher'

const List = observer(() => {
    const {list} = useContext(Context)

    useEffect(() => {
        getPlacements().then(data => list.setPlacements(data));
        getInformations().then(data => list.setInformations(data));
        getAnimals().then(data => {
            list.setSelectedInformation({})
            list.setSelectedPlacement({})
            list.setAnimals(data.rows)
            list.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        getAnimals(list.selectedInformation.id, list.selectedPlacement.id, list.limit, list.page, list.search).then(data => {
            list.setAnimals(data.rows)
            list.setTotalCount(data.count)
        })
    }, [list.page, list.selectedInformation, list.selectedPlacement, list.search,])

    return (
        <div className='flexContainer'>
                        <div className='flexItem'>
                <AnimalList/>

            </div>
            <div className='flexItem' style={{width: '50%'}}>
                <Pager/>
                <Searcher/>
                <div className="searchInfo">
                    <InformationBar/>
                    <PlacementBar/>
                </div>

            </div>

        </div>
    )
})

export default List