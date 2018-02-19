import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      item: ''
    }
  }

  getInput(e) {
    this.setState({
      item: e.target.value
    })
  }

  render () {
    return (
      <div>
        Add Grocery <br/>
        <input placeholder="Add groceries here" onChange={this.getInput.bind(this)} ></input>
        <button onClick={() => {this.props.addGroceryItem(this.state.item)}} >Add to List</button>        
      </div>
    )
  }
}

export default AddGrocery;

