import React, { Component } from 'react'
import $ from 'jquery'
import { NavLink } from 'react-router-dom'

export default class NAv extends Component {
  constructor(){
    super();
    window.addEventListener("scroll",this.changeNavbar.bind(this))
  }
  changeNavbar() {
    let current = $(window).scrollTop();
    let currentOffSet = parseInt('103');
    if(current > currentOffSet){
        $(".navbar").addClass("new-navbar")
    }
    else{
      $(".navbar").removeClass("new-navbar")       
    }
  }
  render() {
      return (
          <>
            <nav id="header" className="navbar navbar-expand-lg position-fixed w-100">
              <div className="container"> 
                <a className="navbar-brand fw-bold" href="header">start angular</a>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">menu <i className="fas fa-bars"></i></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mt-4 mt-md-0">
                  <li className="nav-item">
                      <NavLink className="nav-link" to='/home'>home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to='/portoflio'>portfolio</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to='/about'>about</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to='/contact'>contact</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </>
      )
  }
}
