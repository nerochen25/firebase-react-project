import React from 'react';
import ProjectSummary from './ProjectSummary';
import ProjectDetails from './ProjectDetails';
import { Link } from 'react-router-dom';

const ProjectList = ({projects}) => {
    return (
        <div className="project-list section">
        {projects && projects.map(project => {
                return (
                    <Link to={`/projects/${project.id}`} key={project.id}>
                        <ProjectSummary project={project} key={project.id}/>
                    </Link>
                )
            })}
        </div>
    )
}

export default ProjectList;