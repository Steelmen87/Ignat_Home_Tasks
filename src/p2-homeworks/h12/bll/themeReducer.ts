export type colorType = 'dark' | 'red' | 'some'
export type initStateType = {
    theme: colorType
}

const initState: initStateType = {
    theme: 'some'
};
const SET_THEME = "SET_THEME"
export const themeReducer = (state: initStateType = initState, action: setThemeACType): initStateType => {
    switch (action.type) {
        case SET_THEME: {
            return {
                ...state,
                ...action.payload
            };
        }
        default:
            return state;
    }
};

export const changeThemeAC = (theme: colorType) => {
    return {type: SET_THEME, payload: {theme: theme}} as const
}
export type setThemeACType = ReturnType<typeof changeThemeAC>