import {Link} from 'react-router-dom';
import './Navbar.css'
import './logo.png'

const Navbar = ({user}) => {
//   return (
//     <div className="navbar">
//       <Link to='/'> Movies</Link>
//       &nbsp;  |  &nbsp;
//       <Link to='/actors'>Actors</Link>
//       &nbsp;  |  &nbsp;
//      Welcome, <b>{user}</b> 
//     </div>
//   );
// };


return (
  <nav className="navbar">
    <div className="container">
      <div className="logo">
        {/* Replace the image source with your Netflix-like logo */}
        <img src='./logo.png' alt="Logo" />
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

