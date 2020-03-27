export const updateValue = (value) => {
    return dispatch => {
        dispatch({type: 'UPDATE_VALUE', value})
    }
};
export const addItem= (item) => {
    return dispatch => {
        dispatch({type: 'LOADING'})
        setTimeout(()=>{
            dispatch({type: 'ADD_ITEM', item})
        }, 300);
    }
}