import React from "react";
import s from "./Pagination.module.css"

const Pagination = props => {
   let activePage = props.activePage
    let pagesCount = props.pagesCount
    let setActivePage = props.setActivePage
    let type = props.type
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