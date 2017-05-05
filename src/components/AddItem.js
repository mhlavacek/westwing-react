import React, {Component} from 'react';
import './AddItem.css';
import titleCase from 'title-case';

let newItem = {text: '', person: '', date: new Date().toISOString().substring(0, 10)};

class AddItem extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onPersonChange = this.onPersonChange.bind(this);
    this.state = {newItem : Object.assign(newItem, { type: props.type})};
    this.typeDisplay = titleCase(props.type);
  }

  render() {
    return (
    <div className="new-item-form">
      <p>Enter New {this.typeDisplay}</p>
      <form onSubmit={this.onSubmit}>
        <input type="text" placeholder="Person" autoFocus="autofocus" onChange={this.onPersonChange} required/>
        <input type="date" placeholder="Date" value={newItem.date} onChange={this.onDateChange} required />
        <input type="text" placeholder={this.typeDisplay}
            onChange={this.onTextChange}  required/>

        <button type="submit">Save</button>
        <button type="button" onClick={this.props.onCancel}>Cancel</button>
      </form>
    </div>
    );
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

  onSubmit() {
    this.props.onSubmit(this.state.newItem);
  }
}

export default AddItem;