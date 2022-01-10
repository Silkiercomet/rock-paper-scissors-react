import React from 'react'
import styles from "./modal.module.css"
import Rules from "../Rules/Rules"
function Modal({setModal, modal}) {
    return (
        <div className={styles.modal} onClick={() => setModal(!modal)}>

        </div>
    )
}

export default Modal
