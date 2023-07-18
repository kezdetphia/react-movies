import {Link} from 'react-router-dom';

const Navbar = ({user}) => {
  return (
    <div className="navbar">
      <Link to='/'> Movies</Link>
      &nbsp;  |  &nbsp;
      <Link to='/actors'>Actors</Link>
      &nbsp;  |  &nbsp;
     Welcome, <b>{user}</b> 
    </div>
  );
};

export default Navbar;

