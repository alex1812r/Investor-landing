import React from 'react';
import Fondo from '../images/foto 2-04.png'

class Principals extends React.Component{
    render(){
        const {title} =this.props;
        return(
            <div className="view jarallax">
                <img src={Fondo} className="jarallax-img"/>
                <div className="mask text-white">
                    <div className="flex-center">
                    <div className="container" >
                        <h3 className="text-center font-weight-bold mb-5 wow fadeInLeft">{title}</h3>     
                        <div className="row text-center">
                            <div className="col-md-3 col-sm-6">
                                <h5 className="mb-3 font-weight-bold wow fadeInDown">Clear Cut Value Flow Equations for every project.</h5>
                                <small>
                                <p className="wow fadeInUp"  data-wow-delay="0.6s"><b>Value Flow Equation</b></p>
                                <p className="wow fadeInUp"  data-wow-delay="0.6s">
                                    The <b>benefit redistribution algorithm</b> or better known as <b>value flow equation</b> prescribes how benefits (including <b><u>revenue, access to governance</u>,</b> and <b><u>access to fractal ownership of assets being built</u></b> etc.) are distributed to all participants (active affiliates) in a collaborative process.
                                </p>
                                </small>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <h5 className="mb-3 font-weight-bold wow fadeInDown">Open Business Model</h5>
                                <small>
                                <p className="wow fadeInUp"  data-wow-delay="0.6s"><b>Open Business Model.</b></p>
                                <p className="wow fadeInUp"  data-wow-delay="0.6s">
                                    Open business is an approach to <a className="font-weight-bolder text-info" href="https://en.wikipedia.org/wiki/Business">enterprise</a> that draws on ideas from <a className="font-weight-bolder text-info" href="https://en.wikipedia.org/wiki/Openness">openness</a> movements like  <a className="font-weight-bolder text-info" href="https://en.wikipedia.org/wiki/Free_software">free software</a>, <a className="text-info font-weight-bolder" href="https://en.wikipedia.org/wiki/Open-source_model">open source</a>, <a className="font-weight-bolder text-info" href="https://en.wikipedia.org/wiki/Open_Content">open content</a> and open tools and standards. The approach places value on <a className="font-weight-bolder text-info" href="https://en.wikipedia.org/wiki/Transparency_(behavior)">transparency</a>, stakeholder inclusion, and accountability. (<a className="font-weight-bolder text-info" href="https://en.wikipedia.org/wiki/Open_business">wikipedia</a>)
                                </p>
                                </small>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <h5 className="mb-3 font-weight-bold wow fadeInDown">Regulatory Compliant</h5>
                                <small>
                                <p className="wow fadeInUp"  data-wow-delay="0.6s"><b>Regulation Technology</b></p>
                                <p className="wow fadeInUp"  data-wow-delay="0.6s">
                                    Regulatory technology, in short regtech, is a new field within the financial technology industry that utilizes information technology to enhance regulatory processes. It puts a particular emphasis on regulatory monitoring, reporting and compliance and is thus benefiting the finance industry.    
                                </p>
                                </small>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <h5 className="mb-3 font-weight-bold wow fadeInDown">Agent Centric overrides all</h5>
                                <small>
                                <p className="wow fadeInUp"  data-wow-delay="0.6s"><b>Agent Centric</b></p>
                                <p className="wow fadeInUp"  data-wow-delay="0.6s">
                                Agent Centric , means integration only happens at the agent level, no 3rd party will ever be able to use your information or exclude you from decisions you haven't given prior permission to. (<a className="text-info font-weight-bolder" href="https://developer.holochain.org/guide/latest/faq.html#what-does-agent-centric-mean-how-is-this-different-from-data-centric">https://developer.holochain.org/guide/latest/faq.html#what-does-agent-centric-mean-how-is-this-different-from-data-centric</a>)
                                </p>
                                </small>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>  
        )
    }
}

export default Principals;