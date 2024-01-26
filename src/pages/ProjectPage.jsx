// ProjectPage.jsx
import React from 'react';
import Project from '../components/UI/Project';
import '../styles/projectpage.css';

import budgetImage from '../assets/budget-buddy.jpg';
import movieImage from '../assets/movie-picker.jpg';
import techImage from '../assets/tech-blog.jpg';
import weatherImage from '../assets/weather-app.jpg';
import quizImage from '../assets/code-quiz.jpg';
import textImage from '../assets/text-editor.jpg';

const ProjectPage = () => {
  const projects = [
    {
      title: 'Budget Buddy',
      description: `Budget Buddy is a user-friendly financial management app
      designed to empower users in handling their finances
      effectively. It simplifies the budgeting process by offering
      tools for tracking income, setting savings goals, and managing
      expenses.`,
      projectLink: 'https://app-budget-buddy-17170e451f60.herokuapp.com/',
      repoLink: 'https://github.com/dylanhoryza/budget-tracker-team-5',
      imageSrc: budgetImage,
      altText: 'Budget Buddy Image',
    },
    {
      title: 'Movie Picker',
      description: `Movie Picker is the go to web application for any movie watcher,
      struggling to decide what to watch. It helps the user choose
      between which movie to watch by comparing ratings and offers a
      suggestion. Sit back, relax, and let Movie Picker do the work!`,
      projectLink: 'https://dylanhoryza.github.io/team-1-movie-picker/',
      repoLink: 'https://github.com/dylanhoryza/team-1-movie-picker',
      imageSrc: movieImage,
      altText: 'Movie Picker Image',
    },
    {
      title: 'Tech Blog',
      description: `Tech Blog is a full stack application that allows users to
      create their own blog posts about all things tech! Utilizing
      secure authorization sign-in, Tech Blog gives you a safe place
      to post and comment on unique tech blogs.`,
      projectLink: 'https://tech-blog-dh-b16846947265.herokuapp.com/',
      repoLink: 'https://github.com/dylanhoryza/tech-blog',
      imageSrc: techImage,
      altText: 'Tech Blog Image',
    },
    {
      title: 'Weather Dashboard',
      description: `Weather Dashboard is an application that stores your weather
      searches and gives you the five day forecast for any city. This app uses the Open-Weather API to pull data. It
      has a clean design and user-friendly interface that makes
      searching for a forecast, a breeze!`,
      projectLink: 'https://dylanhoryza.github.io/weather-dashboard/',
      repoLink: 'https://github.com/dylanhoryza/weather-dashboard',
      imageSrc: weatherImage,
      altText: 'Weather Dashboard Image',
    },
    {
      title: 'JavaScript Code Quiz',
      description: `JavaScript Code Quiz is a fun way to learn the basics of JavaScript! This is a timed game with multiple choice
      questions to quiz you on the fundementals of JavaScript. Your highscore will be saved at the end of the game along with
      your initals. Be careful, wrong answers subtracts time and lowers your highscore!`,
      projectLink: 'https://dylanhoryza.github.io/code-quiz/',
      repoLink: 'https://github.com/dylanhoryza/code-quiz',
      imageSrc: quizImage,
      altText: 'Code Quiz Image',
    },
    {
      title: 'Text Editor',
      description: `Text Editor is a progressive web application that can function as your own text editor just like VScode!
      You can install this application to your local machine and it can even save any of your inputs if 
      you are offline. `,
      projectLink: 'https://text-editor-pwa-k69w.onrender.com',
      repoLink: 'https://github.com/dylanhoryza/text-editor-pwa',
      imageSrc: textImage,
      altText: 'Text Editor Image',
    },
    
  ];

  return (
    <section className="container project-container" id="projects">
      <h1 className="projects-header"></h1>
      <div className="row">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
      <h3 className="more-projects">For more projects and repos, visit my Github profile!</h3>
      <div className="row justify-content-center">
        <a href="https://github.com/dylanhoryza" target="_blank" className="btn btn-dark btn-block mb-3 github-btn" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </section>
  );
};

export default ProjectPage;
