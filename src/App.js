import React, { Component } from 'react';
import Guid from 'guid'
import ListItem from './components/ListItem'
import Header from './components/Header'
import './App.css';
// import itemsStore from './stores/ItemsStore'

// This is our "data source". In an advanced scenario, you could
// get this from a data store of some sort (local storage, )
let items = [
  { id: Guid.raw(), text: "You guys realize this is horseshit, right?", person: "Dom", date: "Apr 24 2017" },
  { id: Guid.raw(), text: "You guys realize this is horseshit, right?", person: "Dom", date: "Apr 24 2017" },
  { id: Guid.raw(), text: "You guys realize this is horseshit, right?", person: "Dom", date: "Apr 24 2017" }
]

let newItem = {text: '', person: '', date: new Date().toISOString().substring(0, 10)};

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: items,  // items from "let items = ["
      mode: 'display',
      newItem: newItem
    }
    //itemsStore.subscribe(function(items) {
    //    this.setState({items: items})  
    //})
    this.onAddItem = this.onAddItem.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onPersonChange = this.onPersonChange.bind(this);
    this.onSubmitItem = this.onSubmitItem.bind(this);
  }
  render() {
    if(this.state.mode === 'display')
    {
      return (
      <div className="App">
        <Header/>
        <div className="toolbar">
          <a className="add-item" onClick={this.onAddItem}>
            new quote
          </a>
        </div>
        <ul className="item-list">
          { this.state.items.map((item) => ListItem(item)) }
        </ul>
      </div>
        );
    }
    else {
      // render 'new'
      return (
      <div className="new-item-form">
        <p>Enter New Quote</p>
        <form onSubmit={this.onSubmitItem}>
          <input type="text" placeholder="Person" autoFocus="autofocus" onChange={this.onPersonChange} required/>
          <input type="date" placeholder="Date" value={newItem.date} onChange={this.onDateChange} required />
          <input type="text" placeholder="Quote"
              onChange={this.onTextChange}  required/>

          <button type="submit">Submit</button>
        </form>
      </div>
      );
    }
  }

  onAddItem() {
    this.setState({mode: 'new'});
  }

  // event is the dom event that fired from the onChange
  onTextChange(event) { this.setNewItemField('text', event.target.value) }
  onDateChange(event) { this.setNewItemField('date', event.target.value) }
  onPersonChange(event) { this.setNewItemField('person', event.target.value) }

  setNewItemField(field, value) {
    this.setState({
      newItem: {
        ...this.state.newItem,
        [field]: value
      }
    })
  }

  onSubmitItem() {
    //itemsStore.addItem(newItem)
    this.setState({
      mode: 'display',
      items: [
       ...this.state.items,
       Object.assign(this.state.newItem, { id: Guid.raw() })
      ],
      newItem: newItem  // from let newItem = {...
    });
  }
}

export default App;