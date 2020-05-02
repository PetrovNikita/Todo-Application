import React, { Component } from "react";
import {bindActionCreators, compose} from "redux";
import { connect } from "react-redux";
import store from "../../store.js";

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';
import LoadingIndicator from '../loading-indicator';
import WithService from '../hoc/with-service';
import ErrorIndicator from '../error-indicator';

import * as actions from '../../actions';

import './app.css';


class App extends Component {

  onItemAdded = (label) => {
    const item = this.createItem(label);
    this.props.addItem(item) ;
  };

  createItem(label) {
    return {
      id: new Date().toISOString(),
      label,
      important: false,
      done: false
    };
  }

  filterItems(items, filter) {
    if (filter === 'all') {
      return items;
    } else if (filter === 'active') {
      return items.filter((item) => (!item.done));
    } else if (filter === 'done') {
      return items.filter((item) => item.done);
    }
  }

  searchItems(items, search='') {
    if (search.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }

  componentDidMount() {
    this.props.fetchItems();
  } 

  componentDidUpdate() {
    this.props.service.postItems(store.getState().items);
  }



  render() {
    const { items, filter, search, loading, hasError, setFilter, setSearch } = this.props;
    const doneCount = items.filter((item) => item.done).length;
    const toDoCount = items.length - doneCount;
    const visibleItems = this.searchItems(this.filterItems(items, filter), search); 

    //закомментил загрузку чтоб не мешала
    if (loading) return <LoadingIndicator/>;
    if (hasError) return <ErrorIndicator />;

    return (
      <div className="todo-app"> 
        <AppHeader toDo={toDoCount} done={doneCount}/>

        <div className="search-panel d-flex">
          <SearchPanel
            onSearchChange={setSearch}/>

          <ItemStatusFilter
            filter={filter}
            onFilterChange={setFilter} />
        </div>
      
        <TodoList
          items={ visibleItems }/>

        <ItemAddForm
          onItemAdded={this.onItemAdded} />
      </div>
    );
  };
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch, {service}) => {
  ///const { fetchItemsRequest, fetchItemsSuccess, fetchItemsFailure} = actions;
  return {
    ...bindActionCreators({...actions, fetchItems: actions.fetchItems(service)}, dispatch)
  }
};

export default  compose(WithService, connect(mapStateToProps, mapDispatchToProps))(App);