import React from 'react';
import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import * as actions from '../../actions';

import TodoListItem from '../todo-list-item/todo-list-item';

import './todo-list.css';

const TodoList = ({ items, filter, search, toggleImportant, toggleDone, onDelete, changeLabel }) => {

  const filterItems = (items, filter) => {
    if (filter === 'all') {
      return items;
    } else if (filter === 'active') {
      return items.filter((item) => (!item.done));
    } else if (filter === 'done') {
      return items.filter((item) => item.done);
    }
  };

  const searchItems = (items, search='') => {
    if (search.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  };

  const visibleItems = searchItems(filterItems(items, filter), search); 
  if (visibleItems.length===0) {
    switch (filter) {
      case "all": {return <div>You have not todos.</div>}
      case "active": {return <div>You have not active todos.</div>}
      case "done": {return <div>You have not done todos.</div>}
      default: {return <div>You have not todos.</div>}
    }
  }


  const elements = visibleItems.map((item) => {
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

export default connect(({items, filter, search}) => ({items, filter, search}), mapDispatchToProps)(TodoList);
