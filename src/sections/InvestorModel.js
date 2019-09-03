import React from 'react';
import Paragraph from '../components/Paragraph'
import icon1 from '../images/Iconos-09.png';
import icon2 from '../images/Iconos-10.png';
import icon3 from '../images/Iconos-11.png';
//import Photo from '../images/2019-04-04_14-09-47.png'
//import Photo2 from '../images/2019-04-02_14-38-42.png';
import Photo from '../images/cuadro holo-07.png'

function InvestorModel(){
    return(
      <React.Fragment>
       <div className="container mb-5" >
           <Paragraph 
              title="Investor Model" 
              subtitle="De-risked." 
            />
            <br/>
              
            <div className="row mb-5">
              <div className="col-4">
                <div className="d-flex justify-content-center mb-4">
                    <img src={icon1} className="wow rotateInUpRight" width="25%"/>
                </div>
                <div className="text-center">
                  <h6 className="font-weight-bold mb-3 wow bounceIn text-indigo-lighten-1">Apples to apples project evaluation framework</h6>
                  <small className="grey-text wow fadeIn">
                  Investors want clear cut terms on the life cycle of their investment, we insist all projects have clear cut valueflow equations so all parties can work through scenarios for themselves to work out of the proposed value flow equation will satisfy their needs.  It's simple... If enough people invest to trigger the first rule that stats the value flow equations then the project kicks off.
                  </small>
                </div>
              </div>

              <div className="col-4">
                <div className="d-flex justify-content-center mb-4">
                  <img src={icon2} className="wow rotateInUpRight" width="25%" />
                </div>
                <div className="text-center">
                  <h6 className="font-weight-bold mb-3 wow bounceIn text-indigo-lighten-1">Event Tracking Accountability Framework</h6>
                  <small className="grey-text wow fadeIn">All project consists of activities.  Successful projects require a set of activities to happen in a specific order.  We track these activities in realtime for you to query at anytime.</small>
                </div>
              </div>

              <div className="col-4">
                <div className="d-flex justify-content-center mb-4">
                    <img src={icon3} className="wow rotateInUpRight" width="25%"/>
                </div>
                <div className="text-center">
                  <h6 className="font-weight-bold mb-3 wow bounceIn text-indigo-lighten-1">Clear Cut ROI Equations & Tax Benefits for domestic and foreign investors</h6>
                  <small className="grey-text mb-0 wow fadeIn">Know exactly what events need to occur in order for you to receive your ROI.  No subjectivity.  No room for corruption.</small>
                </div>
              </div>

            </div>

        </div>
        <div className="container-fluid mb-5">
          <p className="text-center wow bounceIn">Here is an example of an <span style={{textDecoration:`underline`}}><b>open value network</b></span> in action, building a 1000 3D printed phone stands.</p>
          <img src={Photo} className="img-fluid wow fadeInLeft"/>
          <div className="container mt-5">
            <p className="wow fadeIn">The distribution is transparent in every detail, published for all to see.  Open-book accounting.</p>
            <p className="wow fadeIn">The name and the idea arose out of <a href="http://www.sensorica.co/home/about-us">Sensorica</a>. Here's <a href="http://valuenetwork.referata.com/wiki/Benefits_distribution_algorithm#Background" >some history</a> on <b>Open Value Equations/Benefit Redistribution Algorithms</b> and how they form the <b>Open Value Network</b> illustrated example above.</p>
          </div>
        </div>
        </React.Fragment>  
          
    )
}

export default InvestorModel;