import React  from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import TextForm from "./components/TextForm";doesnt work
// import text from "./TextForm";  doesnt work

export default function Navbar(props) {

//   const [searchTerm, setsearchTerm] = useState("");
//   const handleSearch=(e)=>{
// setsearchTerm(e.target.value);
// console.log(searchTerm);
  // }
  // const Srch=()=>{
  //   let arr={text}.split("");
  //   arr.forEach(element => {
  //     if(searchTerm===element)
  //     console.log(element);
  //   });
  // }
  return (
    
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  {props.aboutText}
                </Link>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-3`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
{/* onSubmit={(e)=>e.preventDefault()} */}
            {/* <form className="d-flex" role="search" >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                // onChange={handleSearch}
              />
              -onClick={Srch}-
              <button className="btn btn-outline-primary" type="submit" >
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "set text here",
  aboutText: "About text here",
};
