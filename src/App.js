import React, { Component } from 'react';
import Guid from 'guid'
import Header from './components/Header'
import Toolbar from './components/Toolbar'
import Items from './components/Items'
import AddItem from './components/AddItem'
import './App.css';
// import itemsStore from './stores/ItemsStore'

// This is our "data source". In an advanced scenario, you could
// get this from a data store of some sort (local storage, )
let items = [
  { id: Guid.raw(), type: "quote", text: "You guys realize this is horseshit, right?", person: "Dom", date: "Apr 24 2017" },
  { id: Guid.raw(), type: "quote", text: "You guys realize this is horseshit, right?", person: "Dom", date: "Apr 24 2017" },
  { id: Guid.raw(), type: "quote", text: "You guys realize this is horseshit, right?", person: "Dom", date: "Apr 24 2017" }
]

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: items,  // items from "let items = ["
      mode: 'display',
      newType: ''
    }
    //itemsStore.subscribe(function(items) {
    //    this.setState({items: items})  
    //})
    this.onAddItem = this.onAddItem.bind(this);
    this.onSubmitItem = this.onSubmitItem.bind(this);
    this.onCancelItem = this.onCancelItem.bind(this);
  }
  render() {
    if(this.state.mode === 'display')
    {
      return (
      <div className="App">
        <Header/>
        <Toolbar addText="new quote" 
                 addAction={this.onAddItem}/>
        <Items items={this.state.items}/>
      </div>
        );
    }
    else {
      return (
        <div className="App">
          <Header/>
          <AddItem type={this.state.newType} 
                   onSubmit={this.onSubmitItem} 
                   onCancel={this.onCancelItem}/>
        </div>
      );
    }
  }

  onAddItem() {
    this.setState({mode: 'new', newType: 'quote'});
  }

  onSubmitItem(item) {
    //itemsStore.addItem(newItem)
    this.setState({
      mode: 'display',
      items: [
       ...this.state.items,
       Object.assign(item, { id: Guid.raw() })
      ]
    });
  }

  onCancelItem(){
    this.setState({mode: 'display', newType: ''});
  }
}

export default App;