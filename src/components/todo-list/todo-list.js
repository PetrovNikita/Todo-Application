import React from 'react';
import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import * as actions from '../../actions';

import TodoListItem from '../todo-list-item/todo-list-item';

import './todo-list.css';

const TodoList = ({ items, toggleImportant, toggleDone, onDelete }) => {

  const elements = items.map((item) => {
    const {id, ...itemData} = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          { ...itemData }
          toggleImportant={ () => toggleImportant(id) }
          onDelete={ () => onDelete(id) } 
          toggleDone = {() => toggleDone(id)} />
      </li>
    );
  });

  return (<ul className="todo-list list-group">{ elements }</ul>);
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    toggleDone: actions.toggleDone,
    toggleImportant: actions.toggleImportant,
    onDelete: actions.deleteItem
  }, dispatch);

export default connect(() => ({}), mapDispatchToProps)(TodoList);
