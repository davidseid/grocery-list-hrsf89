import React from 'react';

const GroceryItem = (props) => (
  <div className="item">
    {props.item.description}:      
    {props.item.quantity}
  </div>
)

export default GroceryItem;