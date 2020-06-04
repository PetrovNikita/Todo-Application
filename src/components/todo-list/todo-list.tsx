import React from 'react';
import {bindActionCreators, Dispatch} from "redux";
import { connect, DefaultRootState } from "react-redux";
import * as actions from '../../actions';

import TodoListItem from '../todo-list-item/todo-list-item';

import './todo-list.css';
import { ITodoList, ITodo } from '../../interfaces/interfaces';

const TodoList: React.FC<ITodoList> = ({ items, filter, search, toggleImportant, toggleDone, onDelete, changeLabel }) => {

  function filterItems (items: Array<ITodo>, filter: string): Array<ITodo> {
    let filteredItems: ITodo[] = [];
    try {
      if (filter === 'all') {
        filteredItems = items;
      } else if (filter === 'active') {
        filteredItems = items.filter((item) => (!item.done));
      } else if (filter === 'done') {
        filteredItems = items.filter((item) => item.done);
      }
    } catch (error) {console.log(error);};
    return filteredItems;
  };

  function searchItems (items: Array<ITodo>, search: string = ''): ITodo[] {
    let searchedItems: Array<ITodo> = [];
    try {
      if (search.length === 0) {
        searchedItems = items;
      }

      searchedItems = items.filter((item) => {
        return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
    } catch (error) {console.log(error)}
    return searchedItems;
  };

  const filteredItems = filterItems(items, filter);
  const visibleItems = searchItems(filteredItems, search); 
  if (filteredItems.length===0) {
    switch (filter) {
      case "all": {return <div>You have not todos.</div>}
      case "active": {return <div>You have not active todos.</div>}
      case "done": {return <div>You have not done todos.</div>}
      default: {return <div>You have not todos.</div>}
    }
  } 
  else if (visibleItems.length===0) {
    switch (filter) {
      case "all": {return <div>You have not todos satisfying search.</div>}
      case "active": {return <div>You have not active todos satisfying search.</div>}
      case "done": {return <div>You have not done todos satisfying search.</div>}
      default: {return <div>You have not todos satisfying search.</div>}
    }
  }


  const elements = visibleItems.map((item: ITodo) => {
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

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    toggleDone: actions.toggleDone,
    toggleImportant: actions.toggleImportant,
    onDelete: actions.deleteItem,
    changeLabel: actions.changeLabel
  }, dispatch);

export default connect((state: DefaultRootState) => state, mapDispatchToProps)(TodoList);
