import React, { Component } from 'react';

class ProjectItem extends Component {

  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    console.log("These are the props:" + this.props);
    return (
      <li className="Projects">
        <strong>{this.props.project.title}</strong> - {this.props.project.category}
        <a href='#' onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
      </li>
    );
  }
}

//ProjectItem.propTypes = {
//  project: React.PropTypes.object,
//  onDelete: React.propTypes.func
//}

export default ProjectItem;
