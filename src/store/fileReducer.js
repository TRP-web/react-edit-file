const defaultState = {
    content: ''
}

export const fileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_CONTENT":
            return {
                ...state,
                content: action.newContent
            }
        default: return state
    }
}