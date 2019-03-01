const initialState = {
    list_reducer_items: [''],
    list_value: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_TEXT' : // замена содержимого;
        return {
            ...state,
            initial_reducer_items: [action.payload]
        };
        case 'ADD_NEW_TEXT' : // добавление нового содержимого к старому содержимому;
        return {
            ...state,
            initial_reducer_items: [...state.initial_reducer_items, action.payload]
        };
        case 'SET_VALUE' : 
        return {
            ...state,
            value: action.payload
        };
        default:
        return state
    }
}