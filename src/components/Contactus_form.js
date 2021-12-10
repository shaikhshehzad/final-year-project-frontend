import React from "react";
class Contactus_form extends React.Component {
    render() {
        return(
        <>
        <div className="container my-4">
        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputName" class="form-label">name</label>
    <input type="name" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputName" class="form-label">reason</label>
    <input type="name" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputName" class="form-label">State</label>
    <input type="name" class="form-control" id="exampleInputPassword1"/>
  </div> 
  <div class="mb-3">
    <label for="exampleInputName" class="form-label">District </label>
    <input type="name" class="form-control" id="exampleInputPassword1"/>
  </div> 
  <div class="mb-3">
    <label for="exampleInputName" class="form-label">Pincode</label>
    <input type="name" class="form-control" id="exampleInputPassword1"/>
  </div> 
  <div class="mb-3">
    <label for="exampleInputName" class="form-label">Description</label>
    <input type="name" class="form-control" id="exampleInputPassword1"/>
  </div> 
  
{/* aasim */}

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
        </>
        )
    }

}

export default Contactus_form;