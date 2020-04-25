import React, {Component} from "react";

import "./add-todo-item-form.css";

export default class AddTodoItemForm extends Component {
    constructor() {
        super();
        this.state = {};
    }

    handleChange = (event) => {
        event.persist();
        this.setState( {newTodoValue: event.target.value} );
    }

    handleSubmit = (event) => { 
        const { addNewTodo } = this.props;
        const { newTodoValue } = this.state; 

        event.preventDefault(); 
        addNewTodo(newTodoValue);
        this.setState( {newTodoValue: ""} );
    }

    render() {
        const { newTodoValue } = this.state; 
        return (
            <form className="AddTodoItemForm d-flex" onSubmit={this.handleSubmit}>
                <input className="todoLabel form-control" type="text" placeholder="Enter new todo here" value={newTodoValue} 
                    onChange={this.handleChange}/>
                <input className="todoSubmit btn btn-light" type="submit" value="Enter"/>
            </form>
        );
    }
}