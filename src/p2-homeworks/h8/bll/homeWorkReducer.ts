import {GuysType, GuyType} from "../HW8"

const Compare = (payload: string) => {
    if (payload == 'up') {
        return (a: GuyType, b: GuyType) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
    } else if (payload == 'down') {
        return (a: GuyType, b: GuyType) => a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1
    }
}

export const homeWorkReducer = (state: GuysType, action: ActionType): GuysType => {
    switch (action.type) {
        case 'SORT': {
            return [
                ...state.sort(Compare(action.payload))
            ]

        }
        case 'CHECK': {
            return state.filter(p => p.age > action.payload)
        }
        default:
            return state
    }
}
export const Sort = (value: 'up' | 'down') => {
    return {type: 'SORT', payload: value} as const
}
export type SortUpType = ReturnType<typeof Sort>


export const SortAge = (age: number) => {
    return {type: 'CHECK', payload: age} as const
}
export type SortAgeType = ReturnType<typeof SortAge>

type ActionType = SortUpType | SortAgeType

