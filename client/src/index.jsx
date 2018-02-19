import React from 'react';
import ReactDOM from 'react-dom';
import GroceryList from './components/GroceryList.jsx';
import AddGrocery from './components/AddGrocery.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {id: 1, quantity: 5, description: "frozen pizza"},
        {id: 2, quantity: 10, description: "greek yogurt"},
        {id: 3, quantity: 2, description: "wine"},
        {id: 4, quantity: 1, description: "iced coffee"}
      ]
    }
  }

  addGroceryItem(itemName) {

    $.ajax({
      url: '/',
      method: "POST",
      data: JSON.stringify({data: itemName}),
      contentType: 'application/json',
      success: (result) => {
        console.log(`Successful POST request to the server, received back ${result}`);
      },
      error: (err) => {
        console.log(`Got this error from the POST request, ${err}`);
      }
    });
  }

  
  render () {
    return (
      <div>
        <AddGrocery addGroceryItem={this.addGroceryItem.bind(this)} />
        <GroceryList list={this.state.list} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));