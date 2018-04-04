import React, { Component } from 'react';
import './App.css';


//向redux中取出 createStore方法
import {createStore} from 'redux'

//定义一个方法
function counter(state=0,action){
    let {type}=action;
    switch (type){
        case 'increment':
            return state+action.value;
        default:
            return state;
    }
}

//store是数据中心，createStore接收一个function并返回一个值，function可以接收一个action参数
//action是一个对象形式的数据
let store=createStore(counter);

document.addEventListener("click",()=>{
    //提交一个action来改变store中的值,通过store的dispatch方法
    store.dispatch({type:"increment",value:6});
})

//定阅store的数据状态变化，当有状态变化时，触发一个方法；
store.subscribe(()=>{
    let state=store.getState();
    console.log(state);
})

class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
