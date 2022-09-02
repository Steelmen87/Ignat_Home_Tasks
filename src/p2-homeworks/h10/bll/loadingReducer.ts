const initState = {
    isLoading: false
}
export type initStateType = typeof initState
const SET_LOADING = "SET_LOADING"

export const loadingReducer = (state: initStateType = initState, action: loadingACType): initStateType => { // fix any
    switch (action.type) {
        case 'SET_LOADING': {
            return {
                ...state,
                isLoading: action.loading
            }
        }
        default:
            return state
    }
}

export const loadingAC = (loading: boolean) => {
    return {type: SET_LOADING, loading} as const
} // fix any
export type loadingACType = ReturnType<typeof loadingAC>