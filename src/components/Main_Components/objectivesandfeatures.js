import React from 'react';
class Objectivesandfeatures extends React.Component {
    render() {
        return(
        <>
       <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      <b> Salient Features </b>
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <table className="table">
  <thead>
    <tr>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td colspan="2">Web Based Application</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td colspan="2">Aadhar Linkage</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Decision Support </td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td colspan="2">Enforces guidelines</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td colspan="2">Dashboard</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td colspan="2">Statutory Reports </td>
    </tr>
  </tbody>
</table>

</div>
<div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      <b> Objectives </b>
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <table className="table">
  <thead>
    <tr>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td colspan="2">Safe and Adequate Blood Supplies</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td colspan="2">Reduced Turnaround Time</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Preventing Wastage of Blood</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td colspan="2">Restrict Professional Donors</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td colspan="2">Networking of Blood Banks</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td colspan="2">Donor Repository </td>
    </tr>
  </tbody>
</table>

</div>
<div className="container">
  {/* <h3>
  e-Rakt Kosh has six major components for management of the blood donation life cycle:
  </h3> */}
  <li>  e-Rakt Kosh has six major components for management of the blood donation life cycle:
    <ul>1 :- The bio metric Donor Management System for identifying, tracking and blocking donors based on donor's health, donation history etc.</ul>
    <ul>2 :- It provides features such as blood grouping, TTI screening, antibody screening, component preparation etc. as per the defined processes and rules.</ul>
    <ul>3 :- A centralized Blood Inventory Management System for keeping track of the blood stock across numerous blood banks</ul>
    <ul>4 :- Bio-Medical Waste Management System for disposal of discarded blood and other waste generated during this process.</ul>
    <ul>5 :- Generation of rare blood group donor registries and the generation of regular repeat donors</ul>
    <ul>6 :- Alert and Notification System. </ul>
  </li>


</div>

        </>
        )
    }

}

export default Objectivesandfeatures;