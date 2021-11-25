const ProjectTitle = props => {
    const project = props.project;
    const { title, description } = project;
    return (
        <div className='project-title'>
            <p>{title}</p>
            <p className='project-links'>{description}</p>
        </div>
    );
};

export default ProjectTitle;
