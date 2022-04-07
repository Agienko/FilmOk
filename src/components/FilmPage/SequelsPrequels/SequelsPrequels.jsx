import React from "react";
import CardLittle from "../../CardLittle/CardLittle";
import s from "./SequelsPrequels.module.css"

const SequelsPrequels = props => {
   
    return (
            <div className={s.sequelsPrequelsWrapp}>
                <h2> Сиквелы и приквелы:</h2>
                    <div className={s.sequelsPrequels}>
                        {props.sequelsPrequels.map(i =>
                        <CardLittle image={i.posterUrlPreview} 
                        name={i.nameRu} 
                        id={i.filmId} key={i.filmId} relationType={i.relationType}/>
                        )}
                    </div>
            </div>
                       
      
    )
}
export default SequelsPrequels