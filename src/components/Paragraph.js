import React from 'react';

class Paragraph extends React.Component{
    render(){
        const {title,titleEm,subtitle,text,text2,text3} = this.props;
        return(
            <div className="text-center mb-5">
                <h4 className="font-weight-bold text-indigo-lighten-1 wow bounceInUp">{title}</h4>
                <p><em>{titleEm}</em></p>
                <h6 className="font-weight-bold mb-4 wow bounceIn ">{subtitle}</h6>
                <p className="wow fadeIn"  data-wow-delay="0.6s">{text}</p>
                <p className="wow fadeIn"  data-wow-delay="0.6s"><b>{text2}</b></p>
                <p className="wow fadeIn"  data-wow-delay="0.6s">{text3}</p>
            </div>
        )
    }
}

export default Paragraph;