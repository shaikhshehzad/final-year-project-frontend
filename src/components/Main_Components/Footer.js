import React from "react";
class Footer extends React.Component {
    render() {
        return(
        <>
      <footer class="container py-5">
      <div class="row">
        <div class="col-12 col-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mb-2"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
          <small class="d-block mb-3 text-muted">© 2016 -2021 by Ministry of Health and Family Welfare® Designed and Devloped by Centre for Development of Advanced Computings</small>
        </div>
        <div class="col-6 col-md">
          <h5>Services</h5>
          <ul class="list-unstyled text-small">
            <li><a class="text-muted" href="#">Online Donation Request</a></li>
            <li><a class="text-muted" href="#">Nearby Blood Banks</a></li>
            <li><a class="text-muted" href="#">Stock Availibility</a></li>
            <li><a class="text-muted" href="#">Camp Schedule</a></li>
            <li><a class="text-muted" href="#">My Donations</a></li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <h5>Login</h5>
          <ul class="list-unstyled text-small">
            <li><a class="text-muted" href="#">My Donations </a></li>
            <li><a class="text-muted" href="#">E-rakt Kosh Login </a></li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <h5>About</h5>
          <ul class="list-unstyled text-small">
            <li><a class="text-muted" href="#">About NHM Initiatives</a></li>
            <li><a class="text-muted" href="#">About eRaktkosh</a></li>
            <li><a class="text-muted" href="#">Blood Donation</a></li>
            <li><a class="text-muted" href="#">Gallery</a></li>
          </ul>
        </div>
      </div>
    </footer>
    
        </>
        )
    }

}

export default Footer;