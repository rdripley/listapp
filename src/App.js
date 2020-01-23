import React from "react";
import "./App.css";

function List() {
  /* this will need to have the value of input passed to it to the list */
  /* look up how to not show the list if the list is empty */
  return (
    <ol>
      <li>{/* need to look up how to loop through an array*/}</li>
    </ol>
  );
}

function Input() {
  /* this will need a onClick handler for the submit button */
  return (
    <div>
      <input type='text' placeholder='Enter Name here'></input>
      <input type='submit'></input>
    </div>
  );
}

function App() {
  /* App will need to have the onClick function defined here so I can pass
  it down to the List component */
  /* will need the following 

  history: [ 
    {
    lists: Array().fill(null)
    }
  ]
  listNumber: 0
  
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.listNumber + 1);
    const current = history[history.length - 1];
    const list = current.lists.slice();
    this.setState({
      history: history.concat([{lists: lists}]),
      listNumber: history.length
    });
  }

  undoDeletion(list) {
    this.setState({
      listNumber: list
    })

  const listItems = history.map((listItem, listLength)) => {
    const desc = listItem ? ""
  }
  } 
  */
  return (
    <div className='App'>
      <Input />
      <List />
    </div>
  );
}

export default App;
