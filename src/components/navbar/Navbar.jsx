import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { Link, animateScroll as scroll} from 'react-scroll'

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="navbar">
      <div className="container">
        <div className="background-image">
        <div className="wrapper">
        <div className="name" onClick={scrollToTop}>@Sameer Hussain</div>
        <div className="hamburger">
                <Sidebar />
        </div>
        <div className="navigation">
          <Link to="about"  className="nav-item"  >About</Link>
          <Link to= "projects" className="nav-item"  >Work</Link>
          <Link to="footer"  className="nav-item"  >Contact</Link>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar