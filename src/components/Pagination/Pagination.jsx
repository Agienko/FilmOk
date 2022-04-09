import React from "react";
import s from "./Pagination.module.css"

const Pagination = ({activePage, pagesCount, setActivePage, type}) => {
 
    if (pagesCount < 2) return null
    return (
        <div className={s.pagination} >
            <div className={(activePage - 2 <= 0) ? s.hidden : null } onClick={()=>setActivePage(type ,1)}>...</div>
            <div className={(activePage - 1 <= 0) ? s.hidden : null } onClick={()=>setActivePage(type, activePage - 1)}>{activePage - 1}</div>
            <div className={s.active}>{activePage}</div>
            <div className={(activePage + 1 > pagesCount) ? s.hidden : null } onClick={()=>setActivePage(type, activePage + 1)}>{activePage + 1} </div>
            <div className={(activePage + 2 > pagesCount) ? s.hidden : null } onClick={()=>setActivePage(type, pagesCount)}>...</div>
        </div>
    )
}
export default Pagination