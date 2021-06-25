export type ThemeType = 'dark' | 'red' | 'some';
type InitThemeType = {
    theme: string
}
const initState = {
    theme: 'some'
};

export const themeReducer = (state = initState, action: ChangeThemeACType): InitThemeType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return { ...state, theme: action.theme }
        }
        default: return state;
    }
};

type ChangeThemeACType = ReturnType<typeof changeThemeC>
export const changeThemeC = (theme: ThemeType) => ({
    type: "CHANGE-THEME",
    theme
} as const); // fix any