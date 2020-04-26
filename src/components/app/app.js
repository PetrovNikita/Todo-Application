import React, { Component } from "react";
import { connect } from "react-redux";

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';
//import LoadingIndicator from '../loading-indicator';
import WithService from '../hoc/with-service'

import * as actions from '../../actions';

import './app.css';


class App extends Component {

  onItemAdded = (label) => {
    const item = this.createItem(label);
    this.props.loadItems([...this.props.items, item]) ;
  };

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((item) => item.id === id);
    const oldItem = arr[idx];
    const value = !oldItem[propName];
    //копируем элементы, чтоб не мутировать состояние
    const item = { ...arr[idx], [propName]: value } ;
    //slice, чтоб не мутировать состояние
    return [
      ...arr.slice(0, idx),
      item,
      ...arr.slice(idx + 1)
    ];
  };

  onToggleDone = (id) => {
    const items = this.toggleProperty(this.props.items, id, 'done');
    this.props.loadItems(items);
  };

  onToggleImportant = (id) => {
    const items = this.toggleProperty(this.props.items, id, 'important');
    this.props.loadItems(items);
  };

  onDelete = (id) => {
      //копируем элементы, чтоб не мутировать состояние
      const items = [...this.props.items];
      const idx = items.findIndex((item) => item.id === id);
      items.splice(idx, 1);
      this.props.loadItems(items);
  };

  onFilterChange = (filter) => {
    this.props.setFilter(filter);
  };

  onSearchChange = (search) => {
    this.props.setSearch(search);
  };

  createItem(label) {
    return {
      id: ++this.maxId,
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

  finishLoading = () => this.setState({loading: false});

  componentDidMount() {
    console.log('mount');
    const items = this.props.service.getItems();
    this.props.loadItems(items);
  } 



  render() {
    //закомментил загрузку чтоб не мешала
    //if (this.state.loading) return <LoadingIndicator finishLoading={this.finishLoading}/>;
    console.log('render');
    const { items, filter, search } = this.props;
    const doneCount = items.filter((item) => item.done).length;
    const toDoCount = items.length - doneCount;
    const visibleItems = this.searchItems(this.filterItems(items, filter), search); 

    return (
      <div className="todo-app"> 
        <AppHeader toDo={toDoCount} done={doneCount}/>

        <div className="search-panel d-flex">
          <SearchPanel
            onSearchChange={this.onSearchChange}/>

          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange} />
        </div>
      
        <TodoList
          items={ visibleItems }
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
          onDelete={this.onDelete} />

        <ItemAddForm
          onItemAdded={this.onItemAdded} />
      </div>
    );
  };
}

const mapStateToProps = ({items, filter, search, loading}) => {
  return {
    items,
    filter,
    search,
    loading
  };
};

export default connect(mapStateToProps, actions)(WithService(App));