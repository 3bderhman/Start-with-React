import Joi from 'joi';
import React, {useState} from 'react'

export default function Contact() {
    let [errors, seterror] = useState([]);
    let [user, setuser] = useState({
        user_name:'', email_user:'', phone_user:0
    })
    function getUser(e) {
        let myUser = {...user};
        myUser[e.target.name] = e.target.value;
        setuser(myUser);
    }
    function formSubmit(e){
        e.preventDefault();
        let validation = validatRegister();
        if(validation.error){
            seterror(validation.error.details)
        }
    }
    function validatRegister() {
        let scheme = Joi.object({
            user_name : Joi.string().min(3).max(15).required(),
            email_user : Joi.string().email({ tlds: { allow: ['com', 'net'] } }),
            phone_user : Joi.number().min(7).max(11).required()
        })
        return scheme.validate(user, {abortEarly:false});
    }
    return (
        <div>
            <section id="contact" className="contact">
                <div className="container">
                    <h2 className="heading text-center">contact me</h2>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="line"></div>
                        <div className="icon"><i className="fas fa-star fa-2x"></i></div>
                        <div className="line"></div>
                    </div>
                    <form onSubmit={formSubmit}>
                        <div>
                            <input type="text" name="user_name" className="form-input" placeholder="Name" onChange={getUser} />
                        </div>
                        <div>
                            <input type="email" name="email_user" className="form-input" placeholder="Email Address" onChange={getUser} />
                        </div>
                        <div>
                            <input type="tel" name="phone_user" className="form-input" placeholder="Phone Number" onChange={getUser} />
                        </div>
                        <div>
                            <textarea name="message" className="form-input" rows="4" placeholder="Message"></textarea>
                        </div>
                        {errors.map((error, index) => index === 3? <div className="alert alert-danger">should input number</div>: 
                        <div className="alert alert-danger p-2">{error.message}</div>)}
                        <button className="btn btn-primary">submit</button>
                    </form>   
                </div>
            </section>
        </div>
    )
}
