import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {

  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    let projectItems;
    if(this.props.projects){
        projectItems = this.props.projects.map(project => {
            //console.log("asd" + project);
            return (
                <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
            );
        });
    }
    console.log("These are the props:" + this.props);

    return (
      <div className="Projects">
        <h3> Latest Projects </h3>
        {projectItems}
      </div>
    );
  }
}

//Projects.propTypes = {
//  projects: React.PropTypes.array,
//  onDelete: React.propTypes.func
//}

export default Projects;
