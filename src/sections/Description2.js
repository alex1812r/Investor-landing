import React from 'react';
import List from '../components/List';

class Description2 extends React.Component{
    render(){
        const {title,background} = this.props;
        const list1 = [
            "Define what you want to build, including user stories.",
            "Define the Value Equation or Benefit Redistribution Algorithm that would redistribute the value to the investors once built.",
            "Price up the job to build.",
            "Scope out the true cost of building Me new capacity.",
            "Put the concept out to the InvestorEngine community for value equation verification and idea improvement.",
            "Provide an offer to the community with the formula on how investors will b paid back",
            "Make live for crowd-fund",
            "Continue project as funding stages are reached."
        ];
        return(
            <div className="pt-4 pb-4" style={{background:`${background}`}}>
            <div className="container">
                    <h4 className="font-weight-bold text-center text-indigo-lighten-1 mt-5 wow bounceIn">{title}</h4>
                    <div className="col-lg-9 col-sm-12 ml-auto mr-auto pr-5 pl-md-5 mt-5">    
                    <List title="Follow our process to:" list={list1} />
                    </div>
             </div>
            </div>
        )
    }
}
export default Description2;