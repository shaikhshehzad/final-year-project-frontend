import React from "react";

class Type_donors extends React.Component {
  render() {
    return (
      <>
        <div className="conatiner">
          <br />
          <h1>Compatible Blood type donors</h1>
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">Blood Type</th>
                <th scope="col">Donate Blood To</th>
                <th scope="col">Receive Blood From</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A+</td>
                <td>A+ AB+</td>
                <td>A+ A- O+ O-</td>
              </tr>
              <tr>
                <td>O+</td>
                <td>O+ A+ B+ AB+</td>
                <td>O+ O-</td>
              </tr>
              <tr>
                <td>B+</td>
                <td>B+ AB+</td>
                <td>	B+ B- O+ O-</td>
              </tr>
              <tr>
                <td>AB+</td>
                <td>AB+</td>
                <td>Everyone</td>
              </tr>
              <tr>
                <td>A-</td>
                <td>A+ A- AB+ AB-</td>
                <td>A- O-</td>
              </tr>
              <tr>
                <td>O-</td>
                <td>Everyone</td>
                <td>O-</td>
              </tr>
              <tr>
                <td>B-</td>
                <td>B+ B- AB+ AB-</td>
                <td>B- O-</td>
              </tr>
              <tr>
                <td>AB-</td>
                <td>AB+ AB-</td>
                <td>AB- A- B- O-</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <h1>TYPES OF DONATION</h1>
        <p>
          The human body contains five liters of blood, which is made of several useful components i.e.<b> Whole blood, Platelet, and Plasma.</b>
          <br />

          Each type of component has several medical uses and can be used for different medical treatments. your blood donation determines the best donation for you to make.

          For <b> plasma </b> and <b> platelet </b> donation you must have donated whole blood in past two years.

        </p>
        <div className="container">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  White Blood
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <br />
                <div class="accordion-body"><b>What is it?</b><br /><br />
                  Blood Collected straight from the donor after its donation usually separated into red blood cells, platelets, and plasma.
                  <b>
                    <br />
                    Who can donate?</b><br /><br />
                  You need to be 18-65 years old, weigh 45kg or more and be fit and healthy.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  Plasma
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <br />
                <div class="accordion-body"><b>Used For?</b><br /><br />
                Immune system conditions, pregnancy (including anti-D injections), bleeding, shock, burns, muscle and nerve conditions, haemophilia, immunisations.
                  <b>
                    <br />
                    Lasts For?</b><br /><br />
                    Plasma can last up to one year when frozen.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  Platelet
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <br />
                <div class="accordion-body"><b>How does it work?</b><br /><br />
                We collect your blood, keep platelet and return rest to you by apheresis donation.
                  <b>
   
                    <br/>
                    How long does it take?</b><br /><br/>
                    45 minutes to donate.
                    <b>
                      <br/>
                    How often can I donate?</b><br /><br/>
                    Every 2 weeks
                    </div>
              </div>
            </div>
          </div>


        </div>
      </>
    )
  }

}
export default Type_donors;