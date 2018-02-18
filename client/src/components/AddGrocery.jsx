import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      item: 'mozzarella sticks'
    }
  }

  render () {
    return (
      <div>
        Add Grocery
        <form>
          <input placeholder="Add groceries here"></input>
          <button onClick={() => {this.props.addGroceryItem(this.state.item)}}>Add to List</button>
        </form>
        
      </div>
    )
  }
}

export default AddGrocery;

