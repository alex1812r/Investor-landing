import React from 'react'
import Anonymus from '../images/CVR7071P.jpg';

export default function Team(){
  return(
    <React.Fragment>
      <h3 className="font-weight-bold text-indigo-lighten-1 mb-5">Team</h3>
      <div className="row">
        
        <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
          <div className="avatar mx-auto">
            <img src={Anonymus} class="rounded-circle z-depth-1" alt="Sample avatar" />
          </div>
          <h5 class="font-weight-bold mt-4 mb-3">unknown</h5>
        </div>

        <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
          <div className="avatar mx-auto">
            <img src={Anonymus} class="rounded-circle z-depth-1" alt="Sample avatar" />
          </div>
          <h5 class="font-weight-bold mt-4 mb-3">unknown</h5>
        </div>

        <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
          <div className="avatar mx-auto">
            <img src={Anonymus} class="rounded-circle z-depth-1" alt="Sample avatar" />
          </div>
          <h5 class="font-weight-bold mt-4 mb-3">unknown</h5>
        </div>

        
      </div>

      <div className="row">

        <div className="col-lg-6 col-md-6 mb-lg-0 mb-5">
          <div className="avatar mx-auto">
            <img src={Anonymus} class="rounded-circle z-depth-1" alt="Sample avatar" />
          </div>
          <h5 class="font-weight-bold mt-4 mb-3">unknown</h5>
        </div>

        <div className="col-lg-6 col-md-6 mb-lg-0 mb-5">
          <div className="avatar mx-auto">
            <img src={Anonymus} class="rounded-circle z-depth-1" alt="Sample avatar" />
          </div>
          <h5 class="font-weight-bold mt-4 mb-3">unknown</h5>
        </div>

      </div>
    </React.Fragment>
  )
}