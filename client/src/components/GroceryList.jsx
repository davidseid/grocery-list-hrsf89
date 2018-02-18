import React from 'react';
import GroceryItem from './GroceryItem.jsx';

const GroceryList = (props) => {
  return (
    <div className="groceries">
      <em>Grocery List</em>
      {props.list.map((item, index) => {
        return <GroceryItem key={index} item={item} />
      })}
    </div>
  )
}

export default GroceryList;