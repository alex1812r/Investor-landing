import React from 'react';

class List extends React.Component{
    render () {
        const {title,list} = this.props;
        return (
            <React.Fragment>
                <h6 className="mb-3 font-weight-bold wow fadeInLeft">{title}</h6>
                <ul>
                    {list.map((li,key)=>{
                        return(
                            <li className="p-2 wow fadeIn" key={key}><i className="fas fa-circle text-indigo-lighten-1 mr-2" ></i> {li}</li>
                        )
                    })
                    }
                </ul>
            </React.Fragment>
        )
    }
}

export default List;