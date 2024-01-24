import '../styles/projectpage.css'
import budgetImage from '../assets/budget-buddy.jpg'
import movieImage from '../assets/movie-picker.jpg'
import techImage from '../assets/tech-blog.jpg'
import weatherImage from '../assets/weather-app.jpg'
import quizImage from '../assets/code-quiz.jpg'
import textImage from '../assets/text-editor.jpg'


export default function ProjectPage() {
  return (
    <section class="container" id="projects">
    <h1 class="projects-header"></h1>
    <div class="row">
      <div class="col-md-6">
        <div class="card mb-4 project-card">
          <div class="card-body">
            <h5 class="card-title">Budget Buddy</h5>
            <p class="card-text app-bio">
              Budget Buddy is a user-friendly financial management app
              designed to empower users in handling their finances
              effectively. It simplifies the budgeting process by offering
              tools for tracking income, setting savings goals, and managing
              expenses.
            </p>
            <a href="https://app-budget-buddy-17170e451f60.herokuapp.com/" class="btn btn-primary view-btn">Project</a>
            <a href="https://github.com/dylanhoryza/budget-tracker-team-5" class="btn btn-primary view-btn">Repo</a>
          </div>
          <img
            src={budgetImage}
            class="card-img-top budget-buddy"
            alt="Budget Buddy Image"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="card mb-4 project-card">
          <div class="card-body">
            <h5 class="card-title">Movie Picker</h5>
            <p class="card-text app-bio">
              Movie Picker is the go to web application for any movie watcher,
              struggling to decide what to watch. It helps the user choose
              between which movie to watch by comparing ratings and offers a
              suggestion. Sit back, relax, and let Movie Picker do the work!
            </p>
            <a href="https://dylanhoryza.github.io/team-1-movie-picker/" class="btn btn-primary view-btn">Project</a>
            <a href="https://github.com/dylanhoryza/team-1-movie-picker" class="btn btn-primary view-btn">Repo</a>
          </div>
          <img
            src={movieImage}
            class="card-img-top movie-picker"
            alt="Movie Picker Image"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="card mb-4 project-card">
          <div class="card-body">
            <h5 class="card-title">Tech Blog</h5>
            <p class="card-text app-bio">
              Tech Blog is a full stack application that allows users to
              create their own blog posts about all things tech! Utilizing
              secure authorization sign-in, Tech Blog gives you a safe place
              to post and comment on unique tech blogs.
            </p>
            <a href="https://tech-blog-dh-b16846947265.herokuapp.com/" class="btn btn-primary view-btn">Project</a>
            <a href="https://github.com/dylanhoryza/tech-blog" class="btn btn-primary view-btn">Repo</a>
          </div>
          <img
            src={techImage}
            class="card-img-top"
            alt="Tech Blog Image"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="card mb-4 project-card">
          <div class="card-body">
            <h5 class="card-title">Weather Dashboard</h5>
            <p class="card-text app-bio">
              Weather Dashboard is an application that stores your weather
              searches and gives you the five day forecast for any city. This app uses the Open-Weather API to pull data. It
              has a clean design and user-friendly interface that makes
              searching for a forecast, a breeze!
            </p>
            <a href="https://dylanhoryza.github.io/weather-dashboard/" class="btn btn-primary view-btn">Project</a>
            <a href="https://github.com/dylanhoryza/weather-dashboard" class="btn btn-primary view-btn">Repo</a>
          </div>
          <img
            src={weatherImage}
            class="card-img-top"
            alt="weather-app Image"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="card mb-4 project-card">
          <div class="card-body">
            <h5 class="card-title">JavaScript Code Quiz</h5>
            <p class="card-text app-bio">
              JavaScript Code Quiz is a fun way to learn the basics of JavaScript! This is a timed game with multiple choice
              questions to quiz you on the fundementals of JavaScript. Your highscore will be saved at the end of the game along with
              your initals. Be careful, wrong answers subtracts time and lowers your highscore!
            </p>
            <a href="https://dylanhoryza.github.io/code-quiz/" class="btn btn-primary view-btn">Project</a>
            <a href="https://github.com/dylanhoryza/code-quiz" class="btn btn-primary view-btn">Repo</a>
          </div>
          <img
            src={quizImage}
            class="card-img-top budget-buddy"
            alt="weather-app Image"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="card mb-4 project-card">
          <div class="card-body">
            <h5 class="card-title">Text Editor</h5>
            <p class="card-text app-bio">
              Text Editor is a progressive web application that can function as your own text editor just like VScode!
              You can install this application to your local machine and it can even save any of your inputs if 
              you are offline. 

            </p>
            <a href="https://text-editor-pwa-k69w.onrender.com" class="btn btn-primary view-btn">Project</a>
            <a href="https://github.com/dylanhoryza/text-editor-pwa" class="btn btn-primary view-btn">Repo</a>
          </div>
          <img
            src={textImage}
            class="card-img-top"
            alt="weather-app Image"
          />
        </div>
      </div>
    </div>
    <h3 class="more-projects">For more projects and repos, visit my Github profile!</h3>
    <div class="row justify-content-center">
      <a href="https://github.com/dylanhoryza" target="_blank" class="btn btn-dark btn-block mb-3 github-btn">GitHub</a>
    </div>
  </section>
  )
}