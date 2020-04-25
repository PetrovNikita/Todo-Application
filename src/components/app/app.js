import React, { Component } from 'react';

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';
import ErrorBoundry from '../error-boundry';
import LoadingIndicator from '../loading-indicator';

import './app.css';


export default class App extends Component {

  maxId = 100;

  state = {
    items: [
      { id: 1, label: 'Drink Coffee', important: false, done: false },
      { id: 2, label: 'Learn React', important: true, done: false },
      { id: 3, label: 'Make Awesome App', important: false, done: false }
    ],
    filter: 'all',
    search: '',
    loading: true
  };

  onItemAdded = (label) => {
    this.setState((state) => {
      const item = this.createItem(label);
      return { items: [...state.items, item] };
    })
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
    this.setState((state) => {
      const items = this.toggleProperty(state.items, id, 'done');
      return { items };
    });
  };

  onToggleImportant = (id) => {
    this.setState((state) => {
      const items = this.toggleProperty(state.items, id, 'important');
      return { items };
    });
  };

  onDelete = (id) => {
    this.setState((state) => {
      //копируем элементы, чтоб не мутировать состояние
      const updateItems = [...state.items];
      const idx = updateItems.findIndex((item) => item.id === id);
      updateItems.splice(idx, 1);
      return { items: updateItems };
    });
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  onSearchChange = (search) => {
    this.setState({ search });
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

  searchItems(items, search) {
    if (search.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }

  finishLoading = () => this.setState({loading: false});

  componentDidCatch() {
    console.log('err');
  }

  render() {
    if (this.state.loading) return <LoadingIndicator finishLoading={this.finishLoading}/>;

    const { items, filter, search } = this.state;
    const doneCount = items.filter((item) => item.done).length;
    const toDoCount = items.length - doneCount;
    const visibleItems = this.searchItems(this.filterItems(items, filter), search); 

    return (
      <div className="todo-app"> 
        <ErrorBoundry>
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
        </ErrorBoundry>
      </div>
    );
  };
}
