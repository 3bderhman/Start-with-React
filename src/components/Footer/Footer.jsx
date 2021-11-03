import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="mb-md-0 mb-5">
                                    <h3 className="mb-4">Location</h3>
                                    <p className="fs-5 mb-0">2215 John Daniel DriveClark,MO 65243</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-md-0 mb-5">
                                    <h3 className="mb-4">Around the Web</h3>
                                    <div className="social-media">
                                        <i className="fab fa-facebook-f"></i>
                                        <i className="fab fa-twitter"></i>
                                        <i className="fab fa-linkedin-in"></i>
                                        <i className="fab fa-dribbble"></i>
                                     </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-md-0 mb-5">
                                    <h3 className="mb-4">About Freelancer</h3>
                                    <p className="fs-5 mb-0">Freelance is a free to use, MIT licensed Bootstrap theme created by</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="text-center">
                    <p className="mb-0 text-white bg-dark py-4">Copyright © Your Website 2021</p>
                </div>
            </>
        )
    }
}
