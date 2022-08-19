import React, {useState} from 'react'
import {homeWorkReducer, Sort, SortAge} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './style.module.css'

export type GuyType = {
    _id: number
    name: string
    age: number
}
export type GuysType = Array<GuyType>


const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]


function HW8() {
    const [people, setPeople] = useState<GuysType>(initialPeople)

    const finalPeople = people.map((p: GuyType) => (
        <div key={p._id} className={s.itemsContainer}>
            <div>{p.name}</div>
            <div>{p.age}</div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, Sort('up')))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, Sort('down')))
    const sortAge = () => setPeople(homeWorkReducer(initialPeople, SortAge(18)))

    return (
        <div className={s.main}>
            <hr/>
            homeworks 8
            <div className={s.container}>{finalPeople}</div>
            <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
            <div><SuperButton onClick={sortDown}>down</SuperButton></div>
            <div><SuperButton onClick={sortAge}>check 18</SuperButton></div>
            <hr/>
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8;
