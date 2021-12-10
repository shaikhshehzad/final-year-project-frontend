import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Users  from './components/Users';
import Navbar  from './components/Navbar';
import Carousel  from './components/Carousel';
import AboutEr  from './components/AboutEr';
import Objectivesandfeatures from './components/objectivesandfeatures';
import Details from './components/Details';
import Footer from './components/Footer';
import Contactus_form from './components/Contactus_form';
import Online_donation_request from './components/Online_donation_request';
import Gallery from './components/Gallery';




import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Online_donation_request/>
    <center>
    <Navbar/>
    <div className="container my-4 mx-4">
    <Carousel/>
    </div>
    <div className="container my-4 mx-4">
    <Carousel/>
    </div>
    <div className="container my-4 mx-4">
    <AboutEr/>
    </div>
    <div className="container my-4 mx-4">
    <Objectivesandfeatures/>
    <Details></Details>
    <Footer></Footer>
    <Contactus_form></Contactus_form>
    </div>
    {/* <Users/> */}
    </center>
    <Gallery/>


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
