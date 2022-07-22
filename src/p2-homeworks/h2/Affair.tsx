import React from 'react'
import {AffairType} from "./HW2";
import styles from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const {deleteAffairCallback, affair} = props
    const deleteCallback = () => {
        deleteAffairCallback(affair._id)
    }// need to fix

    return (
        <div className={styles.divForAffair}>
            {affair.name} : {affair.priority}
            <button onClick={deleteCallback}>del</button>
        </div>
    )
}

export default Affair
