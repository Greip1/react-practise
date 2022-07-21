import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <p>Copyrigth &copy; 2022</p>
      <Link to="/about">About</Link>
    </footer>
  );
}

export default Footer;
