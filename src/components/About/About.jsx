import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <>
                <section id="#About" className="about">
                    <div className="container">
                        <div className="about-container">
                            <h2 className="heading text-white">About</h2>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="line"></div>
                                <div className="icon"><i className="fas fa-star fa-2x"></i></div>
                                <div className="line"></div>
                            </div>
                            <div className="row mx-auto">
                                <div className="col-md-4 ms-auto">
                                    <div className="about-p text-start">
                                    <p className="mb-5 mb-md-0">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                                </div>
                                </div>
                                <div className="col-md-4 me-auto">
                                <div className="about-p text-start">
                                    <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </>
        )
    }
}

