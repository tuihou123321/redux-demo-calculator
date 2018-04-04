import {createStore} from 'redux'

function counter(state=0,action){
    let {type}=action;
    switch (type){
        case 'increment':
            return state+action.value;
        default:
            return state;
    }
}

let store=createStore(counter);

document.addEventListener("click",()=>{
    console.log(1);
})

store.subscribe(()=>{
    let state=store.getState();
})