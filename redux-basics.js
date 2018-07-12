const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0,
    name: "Kapil",
}

//Reducer
const rootReducer = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER'){
        console.log({...state});
       return {
            ...state,
            counter: state.counter + 1,
        }
    }

    if(action.type === 'ADD_COUNTER'){
        console.log({...state});
        return {
            ...state,
            counter: state.counter + action.value,
        }
    }
    
    return state;
}

//store
const store = createStore(rootReducer);
// console.log(store.getState());

//Subcription
store.subscribe(()=>{
    console.log('[Subcription]',store.getState());
})


//Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
console.log(store.getState());
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());

