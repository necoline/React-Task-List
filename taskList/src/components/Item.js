import React from 'react';

const Item = ({ id, task, description, complete, taskComplete}) => (
  <li
    onClick={() => taskComplete(id)}
    style={complete ? {textDecoration: 'line-through', color: 'grey'} :{}}
  >
    {task}
  </li>

)

export default Item;
