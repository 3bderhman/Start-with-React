import React, { Component } from 'react'
import $ from 'jquery'
import Images from '../../image/Images.js'

export default class Portoflio extends Component { 
    state ={
        source:{}
    }
    
    openModal = (e)=> {
        $(".portfolio-modal").slideToggle(500);
        $(".modal-body").slideToggle(500);
        for(let i=0; i<Images.length; i++){
            if(Images[i].id == e.target.id){
                let source = Images[i];
                this.setState({source});
            }
        }
    }  

    closeModal = ()=>{
        $(".modal-body").slideToggle(500);
        $(".portfolio-modal").slideToggle(500);
    }

    render() {
        return (
            <>
                <section id="portfolio" className="portfolio">
                    <div className="container">
                        <h2 className="heading text-center">portfolio</h2>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="line"></div>
                            <div className="icon"><i className="fas fa-star fa-2x"></i></div>
                            <div className="line"></div>
                        </div>
                        <div div className="row">
                            {Images.map((image, index) => 
                                <div key={index} className="col-md-4">
                                    <div className="portfolio-img">
                                        <img src={image.src} className="img-fluid" alt={image.text} />
                                        <div id={index} className="protfolio-item" onClick={this.openModal}>
                                            <i className="fas fa-plus"></i>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="portfolio-modal">
                            <div className="container">
                                <div className="modal-body"> 
                                    <div className="position-relative mb-4">
                                        <div className="text-end">
                                            <i className="fas fa-times" onClick={this.closeModal}></i>
                                        </div>
                                        <h2 className="heading-modal text-center">{this.state.source.title}</h2>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <div className="line"></div>
                                            <div className="icon"><i className="fas fa-star fa-2x"></i></div>
                                            <div className="line"></div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <img src={this.state.source.src} className="modal-img" alt="" />
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
