import React from 'react';

class CardStage extends React.Component{
    render(){
        const {title,list,subtitle} = this.props;
        return(
            <div className="card shadow h-100">
                <div className="card-body">
                    <h5 className="text-center font-weight-bold text-indigo-lighten-1 wow fadeInUp"  data-wow-delay="0.8s">{title}</h5>
                    <h6 className="text-center font-weight-bold mb-3 wow fadeInUp"  data-wow-delay="0.8s">{subtitle}</h6>
                    <ul>
                    {list.map((li,key)=>{
                        return(
                            <li className="p-2 wow fadeIn" key={key} data-wow-delay="0.9s"><strong className="text-indigo-lighten-1">{key + 1}.</strong> {li}</li>
                        )
                    })
                    }
                </ul>
                </div>
            </div>
        )
    }
}

export default CardStage;