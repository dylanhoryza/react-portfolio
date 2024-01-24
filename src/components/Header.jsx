import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';
import '../styles/navbar.css';

export default function Header() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navbar
      links={[
        <Link key={1} className='nav-link-a' activeClassName='selected' to='/'>
          Home
        </Link>,
        <Link key={2} className='nav-link-a' activeClassName='selected' to='/about'>
          About Me
        </Link>,
        <Link key={3} className='nav-link-a'activeClassName='selected' to='/portfolio'>
          Portfolio
        </Link>,
        <Link key={4} className='nav-link-a'activeClassName='selected' to='/contact'>
          Contact
        </Link>,
        <Link key={5} className='nav-link-a' activeClassName='selected' to='/resume'>
          Resume
        </Link>,
      ]}
    />
  );
}
