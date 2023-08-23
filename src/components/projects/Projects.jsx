import React from 'react';

const Projects = () => {
  const projects = [
    { 
      title: 'Movie evaluation platform',
      description: 'We have created a school project for reviewing and rating movies and TV shows. The project is built using React and incorporates JSON Server, React Context, and React Router DOM. The website features movie search functionality based on keywords and also allows searching by ratings. Users can access detailed information about each movie, read comments from others, and leave their own comments.',
      link: 'https://github.com/Altrocore/movie-evaluation-platform/tree/master',
      video: 'https://ooo.mmhmm.app/z_kTDh0XXPnM3IfTAh40qA'
    },
    { 
      title: 'Feedback', 
      description: 'We have developed a school project that enables users to provide feedback. The project is constructed using React and includes JSON Server, React Context, and React Router DOM. Within the website, users can submit their comments and ratings. The project provides a platform for users to share their thoughts',
      link: 'https://github.com/Alex-Ptpv/secondapp',
      video: 'https://ooo.mmhmm.app/z_LyXE1PYEc1x1xhXO8CxO'
    },
  ];

  return (
    <section className="projects">
      <h2>My Projects: </h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a target="_blank" rel="noopener noreferrer" href={project.link}>See Github repo</a>
            <a target="_blank" rel="noopener noreferrer" href={project.video}>See short video about project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
