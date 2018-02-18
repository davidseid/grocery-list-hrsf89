import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      item: ''
    }
  }

  render () {
    return (
      <div>
        Add Grocery <br/>
        <input placeholder="Add groceries here" onChange={(e) => this.setState({item: e.target.value})} ></input>
        <button onClick={() => {this.props.addGroceryItem(this.state.item)}}>Add to List</button>        
      </div>
    )
  }
}

export default AddGrocery;

