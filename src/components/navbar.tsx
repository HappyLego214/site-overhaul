import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex-row">
        <div className="technology-background"></div>
        <div className="regroup">
          <Link to="/">
            <span className="home">Home</span>
          </Link>
          <Link to="/">
            <span className="solutions">Solutions</span>
          </Link>
          <Link to="/">
            <span className="stories">Stories</span>
          </Link>
          <Link to="/">
            <span className="about">About</span>
          </Link>
          <Link to="/">
            <span className="contact">Contact</span>
          </Link>
        </div>
    </div>
  )
}

export default Navbar