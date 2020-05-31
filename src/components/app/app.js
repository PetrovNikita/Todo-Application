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
import { Footer } from "../footer/footer.tsx";
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

  componentDidMount() {
    this.props.fetchItems();
  } 

  componentDidUpdate({items: prevItems}) {
    console.log(prevItems);
    if (this.props.items.length > 0 || prevItems.length > 0) this.props.service.postItems(store.getState().items);
  }



  render() {
    const { items, filter, loading, hasError, setFilter, setSearch } = this.props;
    const doneCount = items.filter((item) => item.done).length;
    const toDoCount = items.length - doneCount;
    

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
      
        <TodoList />

        <ItemAddForm
          onItemAdded={this.onItemAdded} />
        
        <Footer/>
      </div>
    );
  };
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch, {service}) => {
  return {
    ...bindActionCreators({...actions, fetchItems: actions.fetchItems(service)}, dispatch)
  }
};

export default  compose(WithService, connect(mapStateToProps, mapDispatchToProps))(App);