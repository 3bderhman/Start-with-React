import React, { Component } from 'react'
import logo from '../../image/avataaars (1).svg'

export default class Home extends Component {
    render() {
        return (
            <>
                <section id="home" className="home">
                    <div className="container">
                        <div className="home-container">
                            <img className="image-home" src={logo} alt="" />
                            <h2 className="heading">Start Angular</h2>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="line"></div>
                                <div className="icon"><i className="fas fa-star fa-2x"></i></div>
                                <div className="line"></div>
                            </div>
                            <p className="fs-4 mt-3">Graphic Artist - Web Designer - Illustrator</p>~
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
