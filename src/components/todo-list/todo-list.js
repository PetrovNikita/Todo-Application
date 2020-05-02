import React from 'react';
import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import * as actions from '../../actions';

import TodoListItem from '../todo-list-item/todo-list-item';

import './todo-list.css';

const TodoList = ({ items, toggleImportant, toggleDone, onDelete, changeLabel }) => {

  const elements = items.map((item) => {
    const {id} = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          { ...item }
          toggleImportant={ () => toggleImportant(id) }
          onDelete={ () => onDelete(id) } 
          toggleDone = {() => toggleDone(id)} 
          changeLabel = {changeLabel} />
      </li>
    );
  });

  return (<ul className="todo-list list-group">{ elements }</ul>);
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    toggleDone: actions.toggleDone,
    toggleImportant: actions.toggleImportant,
    onDelete: actions.deleteItem,
    changeLabel: actions.changeLabel
  }, dispatch);

export default connect(() => ({}), mapDispatchToProps)(TodoList);
