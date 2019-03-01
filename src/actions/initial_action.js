
export const changeText = word => ({
    type: 'CHANGE_TEXT',
    payload: word
});

export const createNewString = value => ({
    type: 'NEW_STRING',
    payload: value
});

export const addNewText = value => ({
    type: 'ADD_NEW_TEXT',
    payload: value
});

export const setValue = value => ({
    type: 'SET_VALUE',
    payload: value
});

export const addNewLine = line => ({
    type: 'ADD_NEW_LINE',
    payload: line
});