import React from "react";


export default function StaticLabelItem ({ important, done,
    label, toggleImportant, onDelete, toggleDone, changeItem }) {

    let classNames = 'todo-list-item';
    if (important) {
      classNames += ' important';
    }
  
    if (done) {
      classNames += ' done';
    }

    return (
        <span className={classNames}>
            <span
                className="todo-list-item-label"
                onClick={toggleDone}>{label}</span>

            <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={toggleImportant}>
                <i className="fa fa-exclamation"></i>
            </button>

            <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={onDelete}>
                <i className="fa fa-trash-o"></i>
            </button>

            <button type="button"
                    className="btn btn-outline-primary btn-sm float-right"
                    onClick={changeItem}>
                <i className="fa fa-pencil" aria-hidden="true"></i>
            </button>
        </span>
    )
};