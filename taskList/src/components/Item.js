import React from 'react';

const Item = ({ id, task, description, complete, taskComplete }) => (
  <li
    onClick={() => taskComplete(id)}
    style={complete ? {textDecoration: 'line-through', color: 'grey'} : {}}
  >
    {task}
    {': '}
    {description}
  </li>

)

export default Item;
