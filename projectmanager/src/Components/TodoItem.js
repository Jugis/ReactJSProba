import React, { Component } from 'react';

class TodoItem extends Component {


  render() {
    console.log("These are the props:" + this.props);
    return (
      <li className="Todo">
        <strong>{this.props.todo.title}</strong>
      </li>
    );
  }
}

//ProjectItem.propTypes = {
//  project: React.PropTypes.object,
//  onDelete: React.propTypes.func
//}

export default TodoItem;
