//AboutPage.jsx
import '../reset.css'
import '../styles/aboutpage.css'
import avatarImage from '../assets/avatar.jpg'

// About page content 
export default function AboutPage() {
  return (
    <section class="container" id="about-me">
    <div class="avatar-container">
      <img src={avatarImage} alt="avatar" class="avatar" />
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="card about-me-card">
          <div class="card-body">
            <h5 class="card-title">About Me</h5>
            <p class="card-text" id="about-bio">
              As a Full Stack Web Developer with a unique background in audio
              engineering, I bring a distinctive blend of creativity and
              technical expertise to the world of web development. My journey
              began at Arizona State University, where I earned my certificate
              in Full Stack Web Development.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card skills-card">
          <div class="card-body">
            <h5 class="card-title">Skills</h5>
            <ul class="card-text skills-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>MySQL</li>
              <li>Express.js</li>
              <li>REST APIs</li>
              <li>MongoDB</li>
              <li>Bootstrap</li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
    
  )
}