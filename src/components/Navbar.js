import React from "react";

class Navbar extends React.Component{
render(){

    return(
        <React.Fragment>
{/* <h1>Navbar </h1>
*/}
<nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">E-RAKTKOSH</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            General
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Home</a></li>
            <li><a className="dropdown-item" href="#">About</a></li>
            <li><a className="dropdown-item" href="#">About Blood Donation</a></li>
            <li><a className="dropdown-item" href="#">All Notifications</a></li>
            <li><a className="dropdown-item" href="#">Erakt-kosh FAQs</a></li>

          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services 
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item" href="#">Online Donation Request </a></li>
          <li><a className="dropdown-item" href="#">Blood Availability  </a></li>
          <li><a className="dropdown-item" href="#"> Camp Schedule </a></li>
          <li><a className="dropdown-item" href="#"> Nearby Blood Bank</a></li>
          <li><a className="dropdown-item" href="#"> My Donation </a></li>
          <li><a className="dropdown-item" href="#"> Add your Blood Bank </a></li>
          <li><a className="dropdown-item" href="#"> E-rakt kosh login</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item" href="#">Contact us</a></li>
          <li><a className="dropdown-item" href="#"> Gallery </a></li>
          <li><a className="dropdown-item" href="#"> video Gallery </a></li>
          <li><a className="dropdown-item" href="#">  About E-rakt kosh </a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">My donations</a></li>
            <li><a className="dropdown-item" href="#">E-rakt kosh login</a></li>
            <li><a className="dropdown-item" href="#">E-rakt kosh Signup</a></li>

          </ul>
        </li>
      </ul>
      
    </div>
  </div>
  <a className="navbar-brand" href="#">E-Bot</a>
  <a className="navbar-brand" href="#">Raising Funds</a>


</nav>
    </React.Fragment>
    )
}


}
export default Navbar ;