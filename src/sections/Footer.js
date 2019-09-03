import React from 'react';
import Logo from '../images/LOGO ENGINE FINAL - BLANCO.png';
import Top from '../images/flecha arriba-02.svg'

function Footer(){
    return(
        <div className="gradient-secondary">
            <div className="d-flex justify-content-center">
                <div className="col-6 col-md-3 col-sm-4">
                <a href="#header" data-scroll  style={{outline:'none'}}>
                <img src={Top} className="img-fluid"/>
                </a>
                </div>
            </div>
            <div className="container pt-4">
                <div className="row">
                        <div className='col-md-3  col-sm-12 justify-content-center d-flex mb-5'>
                            <img src={Logo} style={{width:`100%`, height:`auto`,objectFit:'contain'}} />
                        </div>
                        
                        <div className="col-md-9 col-lg-7 col-sm-12 text-white">
                            <div className="row">
                                <div className="col-sm-3  mb-3 ml-2 col-5">    
                                    <strong>QUICK LINKS</strong>
                                    <ul className="nav flex-column">
                                        <li className="nav-item"><a className="nav-link text-white" href="#header" data-scroll>HOME</a></li>
                                        <li className="nav-item"><a className="nav-link text-white" href="#why" data-scroll>Why</a></li>
                                        <li className="nav-item"><a className="nav-link text-white" href="#who" data-scroll>Who</a></li>
                                        <li className="nav-item"><a className="nav-link text-white" href="#contact" data-scroll>CONTACT</a></li>
                                        <li className="nav-item"><a className="nav-link text-white" href="https://investorengine.gitbook.io/investorengine/">Guide Book</a></li>
                                    </ul>
                                </div>
                                <div className="col-sm-4  mb-3 col-6 ml-2">
                                    <strong></strong>
                                    <ul className="nav flex-column">
                                        <li className="nav-item"><a className="nav-link text-white" href="#about" data-scroll>ABOUT</a></li>
                                        <li className="nav-item"><a className="nav-link text-white" href="#what" data-scroll>What</a></li>
                                        <li className="nav-item"><a className="nav-link text-white" href="#forInvestor" data-scroll>For Investors</a></li>
                                        <li className="nav-item"><a className="nav-link text-white" href="#forProductCreators" data-scroll>For Product Creators</a></li>
                                        <li className="nav-item"><a className="nav-link text-white" href="#theOffer" data-scroll>The Offer</a></li>
                                        <li className="nav-item"><a className="nav-link text-white" href="#principals" data-scroll>Principals</a></li>
                                        <li className="nav-item"><a className="nav-link text-white" href="#accountability">Accountability</a></li>
                                        <li className="nav-item"><a className="nav-link text-white" href="#whatComes" data-scroll>What comes next</a></li>
                                    </ul>
                                </div>
                                <div className="col-sm-4 mb-4 ml-2 col-6">
                                    <strong>CONTACT</strong>
                                    <p className="mt-2">InvestorEngine</p>
                                    <p className="mt-2">Avestix Labs</p>
                                    <p className="mt-2">Carrington Chambers Level 1, 143 Wickham Street Fortitude Valley QLD 4006, Australia</p>
                                    <p className="mt-2">admin@investorengine.org</p>
                                </div>
                            </div>

                        </div>
                
                        <div className="col-md-4 col-lg-2 col-sm-6 col-5 justify-content-center d-flex ">
                            <h2><i className="fab fa-facebook-f text-white ml-4"></i></h2>
                            <h2><i className="fab fa-twitter text-white ml-4"></i></h2>
                            <h2><i className="fab fa-instagram text-white ml-4"></i></h2>
                        </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;
