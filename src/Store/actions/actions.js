

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ADD = 'ADD'
export const SUBSTRACT = 'SUBSTRACT'
export const STORE_RESULT = 'STORE_RESULT'
export const DELETE_RESULT = 'DELETE_RESULT'

export const increment = () => {
    return {
        type: INCREMENT,

    }
};
export const decrement = () => {
    return {
        type: DECREMENT,

    }
};
export const add = (value) => {
    return {
        type: ADD,
        value: value
    }
};
export const substract = (value) => {
    return {
        type: SUBSTRACT,
        val: value
    }
};
export const storeResult = (result) => {
    setTimeout(() => {

    }, 2000)
    return {
        type: STORE_RESULT,
        result: result
    }
};
export const deleteResult = (id) => {
    return {
        type: DELETE_RESULT,
        resDelId: id
    }
};
