import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import '../styles/contactPage.css'

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update state based on input name
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else {
      setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check for required fields
    if (!name || !email || !message) {
      setErrorMessage('All fields are required');
      return;
    }

    // Validate email
    if (!validateEmail(email)) {
      setErrorMessage('Invalid email address');
      return;
    }

    // If everything is valid, submit the form
    alert(`Hello ${name}, your message has been submitted!`);
    // Clear form after successful submission
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <div className="container text-center contact-container">
      <h1>Contact me</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          placeholder="Message"
        />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

