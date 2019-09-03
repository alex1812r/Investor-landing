import React from 'react';

class TestBlue extends React.Component{
    render(){
        const {title,classbackground,text,text2,text3,img,subtitle,} = this.props;
        return(
            <div className={classbackground}>
                <div className=" d-flex justify-content-center">
                    <div className="text-white text-center col-12 col-md-9 col-lg-7 ">
                        <h5 className="mb-4 font-weight-bold wow bounceIn">{title}</h5>
                        <h3 className="mb-3 wow fadeIn">{img}</h3>
                        <p className="wow fadeIn">{text}</p>
                        <p className="wow fadeIn">{text2}</p>
                        <p className="wow fadeIn">{text3}</p>
                        <h5 className="wow fadeInUp font-weight-bold">{subtitle}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default TestBlue;