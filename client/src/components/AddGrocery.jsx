import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }

  render () {
    return (
      <div>
        Add Grocery
        <form>
          <input placeholder="Add groceries here"></input>
          <button>Add to List</button>
        </form>
        
      </div>
    )
  }
}

export default AddGrocery;

