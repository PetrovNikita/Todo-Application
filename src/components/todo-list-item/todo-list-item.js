import React, { useState } from 'react';
import StaticItem from "./static-label-item.js";
import ChangingLabelItem from "./changing-label-item.js";

import './todo-list-item.css';

const TodoListItem = (props) => {

  let [changingLabel, setChangingLabel] = useState(false);
  

  const changeItem = () => {
    console.log("change label");
    setChangingLabel((oldValue) => !oldValue );
  };


  let todoItem = changingLabel ? <ChangingLabelItem {...props} changeItem={changeItem}/> : <StaticItem {...props} changeItem={changeItem}/>;

  return (
    todoItem
  )
};

export default TodoListItem;
