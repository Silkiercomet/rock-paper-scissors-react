import React from 'react'
import styles from './rules.module.css'
import normalRules from "../../images/image-rules.svg"
import specialRules from "../../images/image-rules-bonus.svg"
import close from "../../images/icon-close.svg"

function Rules({bonus,setModal,modal}) {
    return (
        <article className={styles.modal}>
        <header className={styles.header}>
        <h2 className="title">Rules</h2>
        <img style={{maxHeight:"17px",cursor:"pointer"}} src={close} alt="close rules" onClick={() => setModal(!modal)} />
        </header>
            <figure className={styles.rules} >
                <img  className={styles.imagen} src={bonus ? specialRules : normalRules} alt="rules of the game" />
            </figure>
        </article>
    )
}

export default Rules
