import React , {Component} from 'react';
import './App.css';
import TodoItem from './components/TodoItem'

class App extends Component {
  constructor(){
    super();
    this.todoItems = [
      {title: 'Play', isComplete: true},
      {title: 'Eat', isComplete: true},
      {title: 'Sleep', isComplete: true}
    ];
  }
  
  render(){
    return (
      <div className="App">
        {
          this.todoItems.length > 0 && this.todoItems.map((item,index)=> <TodoItem item={item}/>)
        }
        {
          this.todoItems.length === 0 && 'Nothing here'
        }
      </div>
  )};
  }

export default App;
