import React from 'react';
import PropTypes from 'prop-types';

function ItemDetail(props){
  const {item, onClickingDelete} = props;
  return(
    <>
      <h1>Item Detail</h1>
      <h3>Item Name: {item.name}</h3>
      <p>Description: {item.description}</p>
      <p>${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={()=> onClickingDelete(item.id) }>Delete Item</button>
      <hr/>
    </>
  )
}
ItemDetail.propTypes ={
  item: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default ItemDetail;