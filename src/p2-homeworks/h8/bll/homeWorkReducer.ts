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
                    const newArray = state.map(p => ({...p}));
                    switch (action.payload) {
                        case "up": {
                            return newArray.sort((a, b) => a.name > b.name ? 1 : -1)
                        }
                        case "down": {
                            return newArray.sort((a, b) => b.name > a.name ? 1 : -1)
                        }
                        default:{
                            return newArray
                        }
                    }
                }
                case 'check': {
                    // need to fix
                    return state.filter(p => p.age > action.payload)
                }
                default:
                    return state
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

