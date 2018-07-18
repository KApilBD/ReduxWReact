import * as actionType from '../../Store/actions/actions';


const initialState = {
    counter: 0,
    results:[],
}

const reducer = (state = initialState, action ) => {

    if (action.type === actionType.INCREMENT){
        return{
            ...state,
            counter: state.counter +1,

        }
    }

    if (action.type === actionType.DECREMENT){
        const newState = Object.assign({},state);
        newState.counter = state.counter -1;
        return newState
    }

    if (action.type === actionType.ADD){
        return{
            ...state,
            counter: state.counter + action.value,

        }
    }

    if (action.type === actionType.SUBSTRACT){
        return{
            ...state,
            counter: state.counter -action.val,

        }
    }

    return state;
}

export default reducer;