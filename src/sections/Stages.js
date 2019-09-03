import React from 'react';
import CardStage from '../components/CardStage';
import Photo from '../images/cuadro-07.png'

function Stages(){
    const list1 = ["Initial Concept.",
                   "Features and User Stories Identified.",
                   "Define value flow equations.",
                   "Seed Money (Value Flow subject to change).",
                   "Validate Value Flow Equations.",
                   "Initial Team Recruited",
                   "Build Tax Free Legal Structure",
                   "Build Crowdfund Page"
                  ];

    const list2 = ["Execute work as fund raising milestones met.",
                   "Deploy Equity Token as Regulated ERC20 Token.",
                  ];

    const list3 = ["Finish Design for each User story.",
                   "Design Knowledge Layer ontologies for HoloREA backend",
                   "Build Front-End Components.",
                   "Wire up.",
                   "Assist other projects to raise funds from InvestorEngine MVP.",
                   "Take on other projects that want to raise funds."
                  ];
    return(
        <div style={{background:`#FAFAFA`}} className="pt-5 pb-5">         
            <div className="container-fluid pl-5 pr-5">
                <div className="wow bounceIn mb-2">
                    <img src={Photo} className="img-fluid" />
                </div>
                <div style={{position:`relative`}}>
                <div id="whatComes" className="signalBig"></div>
                </div>
                <h3 className="text-center text-indigo-lighten-1 font-weight-bold mb-5 wow bounceInRight">So What Comes Next?</h3>
                <div className="row mt-4">
                    <div className="col-lg-4 mb-3 wow fadeInLeft">
                        <CardStage title="STAGE 0: NOW" subtitle="" list={list1}/>
                    </div>
                    <div className="col-lg-4 mb-3 wow fadeInUp">
                         <CardStage title="STAGE 1: RAISE FUNDS" subtitle="" list={list2}/>
                    </div>
                    <div className="col-lg-4 mb-3 wow fadeInRight">
                        <CardStage title="STAGE 2:" subtitle="Build MVP" list={list3}/>
                    </div>
                </div>
                <br />
                <h4 className="text-center font-weight-bolder">REGISTER EXPRESSION OF INTEREST</h4>
                
            </div>
        </div>
    )
}

export default Stages;