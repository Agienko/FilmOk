import React from "react";
import s from "./ActorsMenu.module.scss"

const ActorsMenu = ({ setfilterWord, actors }) => {
  
  const professions = Array.from(new Set(actors.map(i=> i.professionText)))

  return(
        <ul className={s.menu}>
          <li onClick={() => setfilterWord(undefined)} >Все</li>
          {professions.map(i => <li onClick={() => setfilterWord(i)} key={i}>{i}</li>)}
        </ul>
  )
}
export default React.memo(ActorsMenu)