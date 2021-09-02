import logo from "./logo.svg";
import "./App.css";

import React, { useReducer, useState, useContext, useEffect } from "react";


let dispatchContext = React.createContext(); 


function myListReducer(state, action) {
  switch (action.type) {

    case "load-data": {
      return action.payload;
    }

    // one the add item form is open, we can add the item
    case "add-item": {
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          complete: false,
        }
      ]
    }

    case "del-item": {
      return state.filter(listItem => {
        return listItem.id !== action.payload
      })
    }

    case "check-item": {
      return state.map(listItem => {
        return listItem.id === action.payload ? {...listItem, complete: !listItem.complete} : listItem;
      })
    }

    case "clear-completed": {
      return state.filter(listItem => {
        return !listItem.complete;
      })
    }

    default: {
      return state;
    }
  }
}

function init(initialState) {
  return initialState;
}

function App() {
  const [state, dispatch] = useReducer(myListReducer, [], init);
  const [addItemToggle, setAddItemToggle] = useState(false);
  const [inp, setInp] = useState('');

  // Order matters, 
    // if you want to load from local storage, the very first thing has to be that load,
    // otherwise, it will run the other useeffect and clear your local storage
  useEffect(() => {
    const raw = localStorage.getItem("data");
    const list = JSON.parse(raw);
    dispatch({type: 'load-data', payload: list});
  }, [])

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
  }, [state]);



  function submit(e) {
    e.preventDefault();
    dispatch({type: 'add-item', payload: inp});
    setInp('');
    console.log('submitted');
  }


  return (
    <div className="App">

      <h1>My Todo List</h1>

      {/* This is to toggle the input & button for adding a list Item*/}
      <button onClick={() => setAddItemToggle(!addItemToggle)}> {addItemToggle ? "Close New Item" : "Create New Item"} </button>

      <br /><br />

      {addItemToggle &&
      <form action="" onSubmit={submit}>
        <label htmlFor="listItem">New Todo Item</label>
        <input name="listItem" id="listItem" type="search" onChange={(e) => setInp(e.currentTarget.value)} value={inp} required/>
        <button>Add Item</button>
      </form>}

      <h2>Items</h2>
      
      <dispatchContext.Provider value={dispatch}>
        <ListItems items={state} />
      </dispatchContext.Provider>

      <button onClick={() => dispatch({type: "clear-completed"})} >Clear Completed</button>
  
    </div>
    )
}



function ListItems({items}) {

  const dispatch = useContext(dispatchContext);

  return (
    <ul style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {items.map(item => {
        return (
          <li key={item.id} style={{display: 'flex'}}>
            <input type="checkbox" name="completed" checked={item.complete} onChange={() => dispatch({type: 'check-item', payload: item.id})}/>
            <p style={{padding: '0', margin: '0 5px'}}>{item.complete ? <s>{item.text}</s> : item.text}</p>
            <button onClick={() => dispatch({type: 'del-item', payload: item.id})}>Delete Item</button>
          </li>) 
      })}
    </ul>
  )
}





export default App;
