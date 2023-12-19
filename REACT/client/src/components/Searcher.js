import React, { useContext, useState } from 'react'
import { observer } from "mobx-react-lite"
import { Context } from '../index'
import '../site.css'

const Searcher = observer(() => {
    const {list} = useContext(Context)
    const [searchText, setSearchText] = useState('');

    return (
        <div className='listBox optionBar'>
            <input
                style={{width: '100%'}}
                type="text"
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value)
                    list.setSearch(e.target.value)
                }}
            />
        </div>
    )
})

export default Searcher
