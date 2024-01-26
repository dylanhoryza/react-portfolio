import React from 'react';
import { pdfjs } from 'react-pdf';
import '../styles/resumePage.css'

// npm package to download PDF
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const ResumePage = () => {
  // URL that will begin download for resume
  const resumePdf = `${window.location.origin}/Dylan_Horyza_Resume.pdf`;

  const downloadResume = async () => {
    try {
      const response = await fetch(resumePdf);

      // Log the response for debugging
      console.log('Fetch Response:', response);

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'resume.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
  };

  // resume page content
  return (
    <section className="container" id="about-me">
    <div className="resume-container">
      <p className='resume-download'>Download my resume here:</p>
      <button onClick={downloadResume} className='download-btn'>Download</button>
    </div>
    <div className="row">
      <div className="col-md-6">
        <div className="card about-me-card">
          <div className="card-body">
            <h5 className="card-title resume-title">Frontend Proficiencies</h5>
            <ul className="card-text skills-list">
              <li>HTML</li>
            <li>React.js</li>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>JQuery</li>
            <li>Responsive Design</li>
             <li>Bulma</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card skills-card">
          <div className="card-body">
            <h5 className="card-title resume-title">Backend Proficiences</h5>
            <ul className="card-text skills-list">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>mySQL</li>
              <li>noSQL</li>
              <li>mongoDB</li>
              <li>APIs</li>
             <li>mongoose</li>
             <li>GraphQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default ResumePage;



