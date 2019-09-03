import React from 'react';
import CardHorizontal from '../components/CardHorizontal';
import Icon1 from '../images/iconos 2-13.png';
import Icon2 from '../images/iconos 2-12.png';
import Icon3 from '../images/iconos 2-14.png';
import cuadro from '../images/HOLO INVERSOR MOCKUP DASHBOARD.jpg'

function AcuaringFounds(){
    return(
        <div className="gradient-secondary">
           <div className="container-fluid pt-5 pb-5 pr-5">     
            <div className="text-center mb-5 text-white">
            <p className="font-weight-bold wow fadeInLeft"><em>Acquiring Funds.</em></p>
            <h6 className="font-weight-bold mb-4 wow fadeInUp"  data-wow-delay="0.6s">Simplified.</h6>
            <p className="wow fadeIn"  data-wow-delay="0.6s">We've got a simple way to build trust with investors and you get to learn how.</p>
            </div>           
            <div className="row">              
                <div className="col-lg-7 mb-lg-0 mb-5">
               
                <img src={cuadro} className="img-fluid rounded z-depth-1 wow zoomIn" />
                </div>
                              
                <div className="col-lg-5">

                <div className="mb-4">
                    <CardHorizontal title="Simple Process to qualify ideas & tighten scope" 
                                    smallText="Our investment committee have staff ready to help you qualify your idea, work out the market sentiment, define your capacities, tighent scope." 
                                    logo={Icon1}
                                    link="Learn More"
                                    />                
                </div>

                <div className="mb-4">
                    <CardHorizontal title="Hand holding value flow equation creation" 
                                    smallText="We are happy to hold your hand and help you engage with our following to build out a value flow equation that works for your initiative and your investors." 
                                    logo={Icon2}
                                    link="Learn More"
                                    />   
                </div>

                <div className="mb-4">
                    <CardHorizontal title="Tax Benefits Business Structure" 
                                    smallText="We have a fund structure that offers  that Tax Benefits for domestic and foreign investors making your project very attractive to investors." 
                                    logo={Icon3}
                                    link="Learn More"
                                    /> 
                </div>

                </div>

            </div>
            </div>
        </div>
    )
}

export default AcuaringFounds;