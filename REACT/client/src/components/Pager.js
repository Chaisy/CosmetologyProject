import React, {useContext} from 'react'
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import '../site.css'

const Pages = observer(() => {
    const {list} = useContext(Context)
    const pageCount = Math.ceil(list.totalCount / list.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <div className='pagination'>
            {pages.map(page =>
                <span
                    key={page}
                    onClick={() => list.setPage(page)}
                    className={list.page === page ? 'page activePage' : 'page'} 
                >
                    {page}
                </span>
            )}
        </div>
    );
});

export default Pages