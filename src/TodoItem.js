import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        return (
            <li>
                {this.props.children}
            </li>
        );
    }
}

export default TodoItem;