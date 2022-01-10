import React from 'react'
import style from "./game.module.css"
function Game({bonus}) {
    return (
        <article className={style.game} id={bonus?"normal":"bonus"}>

        </article>
    )
}

export default Game
