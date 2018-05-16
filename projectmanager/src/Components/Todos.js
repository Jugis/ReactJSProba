import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {

  render() {
    let todoItems;
    if(this.props.todos){
        todoItems = this.props.todos.map(todo => {
            //console.log("asd" + project);
            return (
                <TodoItem key={todo.title} todo={todo} />
            );
        });
    }
    console.log("These are the props:" + this.props);

    return (
      <div className="Todos">
        <h3> Todo List </h3>
        {todoItems}
      </div>
    );
  }
}

//Projects.propTypes = {
//  projects: React.PropTypes.array,
//  onDelete: React.propTypes.func
//}

export default Todos;
