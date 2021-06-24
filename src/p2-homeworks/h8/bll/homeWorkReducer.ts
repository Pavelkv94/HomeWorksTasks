export type HumanType = {
    _id: number
    name: string
    age: number
}
type CHeckTypeAC = ReturnType<typeof CheckAC>
type SortTypeAC = ReturnType<typeof SortAC>
export type ActionTypes =
    CHeckTypeAC | SortTypeAC


export const homeWorkReducer = (state: Array<HumanType>, action: ActionTypes): Array<HumanType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            let newState = state.sort(function (a: any, b: any) {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                // a должно быть равным b
                return 0;
            });
            if (action.payload === "up") { return newState } else
                return newState.reverse()
        }
        case 'check': {
            // need to fix
            return state.filter(t => t.age >= action.payload)
        }
        default: return state
    }
}

const SortAC = (payload: 'up' | 'down') => {
    return {
        type: 'sort',
        payload,
    }
}

const CheckAC = (payload: number) => {
    return {
        type: 'check',
        payload
    } as const
}
