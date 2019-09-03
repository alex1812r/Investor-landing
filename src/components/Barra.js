import React from 'react';
import Fondo from '../images/foto-01.png';

class Barra extends React.Component{
    render(){
        const {title,classTitle} = this.props;
        return(
            <div className="view">
                <img src={Fondo} className="img-fluid" />
                <div className="mask flex-center text-white">
                    <h4 className={classTitle}>{title}</h4>
                </div>
            </div>
        )
    }
}

export default Barra;