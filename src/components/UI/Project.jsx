// Project.jsx
import React from 'react';

// Project component that can be resued for each project
const Project = ({ title, description, projectLink, repoLink, imageSrc, altText }) => {
  return (
    <div className="col-md-6">
      <div className="card mb-4 project-card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text app-bio">{description}</p>
          <a href={projectLink} className="btn btn-primary view-btn" target="_blank" rel="noopener noreferrer">
            Project
          </a>
          <a href={repoLink} className="btn btn-primary view-btn" target="_blank" rel="noopener noreferrer">
            Repo
          </a>
        </div>
        <img src={imageSrc} className="card-img-top" alt={altText} />
      </div>
    </div>
  );
};

export default Project;
