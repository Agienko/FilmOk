import React from "react";
import s from "./ActorsMenu.module.css"

const ActorsMenu = props => {
  
  const professions = Array.from(new Set(props.actors.map(i=> i.professionText)))

  return(
        <ul className={s.menu}>
          <li onClick={() =>props.setfilterWord(undefined)} >Все</li>
          {professions.map(i => <li onClick={() =>props.setfilterWord(i)} key={i}>{i}</li>)}
        </ul>
  )
}
export default React.memo(ActorsMenu)