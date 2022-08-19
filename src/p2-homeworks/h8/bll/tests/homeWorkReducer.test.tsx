import React from 'react'
import { GuysType } from '../../HW8'
import {homeWorkReducer, Sort} from '../homeWorkReducer'

let initialState: GuysType // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, Sort('up'))
    console.log(newState)
    expect(newState[0].name).toBe('Александр')
    expect(newState[0].age).toBe(66)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'SORT', payload: 'down'})
    console.log(newState)
    expect(newState[5].name).toBe('Александр')
})

test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'CHECK', payload: 18})
    console.log(newState)
    expect(newState.length).toBe(4)
})
