import React from 'react';
import Fondo from '../images/Imagen contacto-07.png';

function Contact(){
    return(
        <div className="view jarallax">
            <img src={Fondo} className="jarallax-img" />
            <div className="mask rgba-indigo-lighten-1 text-white">
                <div className="flex-center">
                    
                    <div className="col-lg-5 col-sm-4 col-6 wow fadeInLeft">
                        <h5 className="mb-3 font-weight-bolder">
                            <b>"Think you can help? Lets Talk"</b>  
                        </h5>
                        <p className="mb-4 font-weight-bolder">
                            We're a rowdy bunch, obsessed with holochain, and can't wait to make this project live. We have a clear roadmap, but many hands make light work.
                        </p>
                        <p>We'd love to talk.</p>
                    </div>

                    <div className="col-lg-4 col-sm-6 ml-sm-5 col-6 wow fadeInRight">
                        <form>

                            <div className="md-form">
                                <input type="text" className="form-control" id="name" name="name" />
                                <label htmlFor="name" className="text-white font-weight-bolder">Name:</label>
                            </div>

                            <div className="md-form">
                                <input type="text" className="form-control" id="phone" name="phone" />
                                <label htmlFor="phone" className="text-white font-weight-bolder">Phone:</label>
                            </div>

                            <div className="md-form">
                                <input type="email" className="form-control" id="email" name="email" />
                                <label htmlFor="email" className="text-white font-weight-bolder">Email:</label>
                            </div>

                            <div className="md-form">
                                <textarea id="serviceInterested" className="form-control md-textarea"></textarea>
                                <label htmlFor="serviceInterested" className="text-white font-weight-bold label-min"><small>
                                    "How do you think you can help?" (or chat to us on our holochain mattermost channel)
                                    </small>
                                </label>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact;