import * as actionType from '../actions/actions';

const initialState = {
    counter: 0,
    results:[],
}

const reducer = (state = initialState, action ) => {

    if (action.type === actionType.STORE_RESULT){
        return{
            ...state,
            results: state.results.concat({id: new Date() ,value: action.result}),
            
        }
    }

    if (action.type === actionType.DELETE_RESULT){
        // const id = 2;
        // const newArray = [...state.results];
        // newArray.results.slice(id,1)

        // this will just copy array to new array]
        // constupdatedArray = state.results.filter(result => true)

        const updatedArray = state.results.filter((result) => result.id !==action.resDelId)

        return{
            ...state,
            results: updatedArray,
            
        }
    }


    return state;
}

export default reducer;