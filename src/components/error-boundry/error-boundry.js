import React, { Component } from "react";
import ErrorIndicator from "../error-indicator";

export class ErrorBoundry extends Component {

    state = {
        error: false
    };

    componentDidCatch(error, info) {
        console.log(`${error} happend. Info: ${info}`);
        this.setState( { error: true} );
    }

    render() {
        const component = this.state.error ? <ErrorIndicator /> : this.props.children;
        return component;
    }
}