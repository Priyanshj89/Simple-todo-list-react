import React from 'react';
import './App.css';
import ListItems from './ListItems';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

class App extends React.Component{
  
  constructor(props){
    super(props); //invoking base class
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''      //defining key in list will order it accordingly
      }
    }
    /*
    this eyword does not point to the class implicitly therefore we need to 
    bind it to the constructor(arrow function in this case) OR
    this.handleInput = this.handleInput.bind(this);
    */
  }

  handleInput=(e)=>{
    e.preventDefault();  //e signifies the event
    this.setState({   //always use setState to change a objects property
      currentItem:{
        text:e.target.value,
        key: Date.now()
      }
    })
  }

  addItem=(e)=>{  //arrow function , therefore no need for binding
    e.preventDefault();//used to prevent default submiision when button clicked
    const newItem = this.state.currentItem;
    //console.log(newItem);
    if(newItem.text!==""){
      const newItems = [...this.state.items, newItem];
      //adding previous all items + newItem in variable items
      // 3 dots(...) is spread objests and destructures objects properties
      //console.log(newItems);
      this.setState({
        items: newItems, //reassigning our actual items array to updated local one
        currentItem:{ //setting currentItem to blank as it is dafault value of input
          text:'',
          key:''
        }
      })
    }
  }

  deleteItem = (key) =>{
    const filteredItems = this.state.items.filter(item => item.key!==key);
    this.setState({
      items:filteredItems
    })
  }

  setUpdate = (text,key) =>{
    const items = this.state.items;
    items.map(item => {
      if(item.key=== key){
        item.text = text;
      }
    })
    this.setState({
      items: items
    })
  }

  render()
  {
    return (      
      <div className = "App">
      <header>
        <form id = "todo-form" onSubmit={this.addItem}>
          <input type = "text" placeholder = "Enter text" 
          value={this.state.currentItem.text} //value used as default field of input
          onChange={this.handleInput} />
          <button type = "submit">Add</button>
        </form>
      </header>
      <ListItems items = {this.state.items} 
      deleteItem = {this.deleteItem} 
      setUpdate = {this.setUpdate}></ListItems>
      </div>
    );
  }
}

export default App;

