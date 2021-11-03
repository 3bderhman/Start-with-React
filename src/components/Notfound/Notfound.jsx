import React, { Component } from 'react'

export default class Notfound extends Component {
    render() {
        return (
            <div className="container">
                <div className="notfound-body">
                    <h1 className="my-4 my-md-5">Page Not Found</h1>
                    <p className="lead m-0">We couldn't find what you were looking for.</p>
                    <p className="fs-5 m-0 mt-4">Please contact the owner of the site that linked you to the original URL and let them know their link is broken.</p>
                </div>
            </div>
        )
    }
}

