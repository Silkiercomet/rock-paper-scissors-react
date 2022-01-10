import React from 'react'
import style from "./scoreboard.module.css"
function ScoreBoard({score,bonus}) {
    return (
        <article className={style.scoreBoard}>
            <div className={style.left}>
                <p style={bonus? {fontSize:"1.5rem"}:null}>
                rock<br/>
                paper<br/>
                scissors<br/>
                {bonus && "lizzard"}
                {bonus && <br/>}
                {bonus && "spock"}
                </p>
            </div>
            <aside className={style.right}>
                <p className={style.score}>score</p>
                <p>{score}</p>
            </aside>
        </article>
    )
}

export default ScoreBoard
