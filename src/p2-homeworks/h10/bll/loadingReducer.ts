const initState = {
    isLoading: false
}

export type StateType = typeof initState
export type LoadingACType = ReturnType<typeof loadingAC>

export const loadingReducer = (state = initState, action: LoadingACType):  StateType => { // fix any
    switch (action.type) {
        case "LOADING": {
            return {...state, isLoading: action.value}
        }
        default: return state
    }
}

export const loadingAC = (value: boolean) => ({ type: "LOADING", value } as const) // fix any