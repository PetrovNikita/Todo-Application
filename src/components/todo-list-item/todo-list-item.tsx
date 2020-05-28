import React, { useState } from 'react';
import StaticItem from "./static-label-item";
import ChangingLabelItem from "./changing-label-item";
import { ITodoListItem } from '../../interfaces/interfaces';

import './todo-list-item.css';

const TodoListItem: React.FC<ITodoListItem> = (props) => {

  let [changingLabel, setChangingLabel] = useState<boolean>(false);
  

  const changeItem: VoidFunction = () => {
    console.log("change label");
    setChangingLabel((oldValue) => !oldValue );
  };


  let todoItem = changingLabel ? <ChangingLabelItem {...props} changeItem={changeItem}/> : <StaticItem {...props} changeItem={changeItem}/>;

  return todoItem;
};

export default TodoListItem;
