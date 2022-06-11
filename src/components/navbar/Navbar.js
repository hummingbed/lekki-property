import './Navbar.css';
import {
  Link
} from "react-router-dom";

const Navbar = () => {
  return (
   
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
        <div className="container">
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <Link className="navbar-brand text-brand" to="/">Estate<span className="color-b">Agency</span></Link>

          <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
            <ul className="navbar-nav">

              <li className="nav-item">
                <Link to="/" className="nav-link" >Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link" >About</Link>
              </li>

              <li className="nav-item">
                <Link to="/property" className="nav-link" >Property</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      

    </div>

      
  );
}

export default Navbar;