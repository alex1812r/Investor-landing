import React from 'react'

class CardHorizontal extends React.Component{
    render(){
        const {logo,title,text,smallText,link} = this.props;
        return(
            <div className="card wow fadeInRightBig">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <div className="flex-center pt-3 pt-md-0">
                        <img src={logo} className="card-img wow rotateInDownRight"  data-wow-delay="0.7s" />
                        </div>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h6 className="card-title">{title}</h6>
                        <p className="card-text">{text}</p>
                        <p className="card-text"><small className="text-muted">{smallText}</small></p>
                        <div className="text-center">
                            <a className="text-indigo-lighten-1" href="https://investorengine.gitbook.io/investorengine">{link}</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardHorizontal;