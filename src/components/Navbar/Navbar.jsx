import {Link} from 'react-router-dom';
import './Navbar.css'
import './logo.png'

const Navbar = ({user}) => {

return (
  <nav className="navbar">
    <div className="container">
      <div className="logo">
        {/* Replace the image source with your Netflix-like logo */}
        <Link style={{color: 'white', textDecoration: 'none'}} to='/'> Logo</Link>
      </div>
      <div className="nav-links">
        {/* Add additional navigation links here */}
        <Link to='/'> Movies</Link>
        <Link to='/actors'>Actors</Link>
        &nbsp;  |  &nbsp;
        &nbsp;    &nbsp;
        Welcome, <b>{user}</b> 
      </div>
    </div>
  </nav>
);
};

export default Navbar;

