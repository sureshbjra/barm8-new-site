import './contact.css';
import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export class Contact extends Component {

    constructor(props) {
        toast.configure()
        // toast.success("Wow so easy!");
        super(props);
        this.state = {
            firstName: '', email: '', phone: '',
            businessName: '', requestType: '',
            firstnameError: false, emailError: false,
            phoneError: false, requestTypeError: false,
            isLoad: false
        };
    }

    firstNameChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        if (this.state.firstName) this.setState({ firstnameError: false });
    }

    emailChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        if (this.state.email) this.setState({ emailError: false });
    }

    phoneChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        if (this.state.phone) this.setState({ phoneError: false });
    }

    businessNameChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        // if (this.state.businessName) this.setState({ businessNameError: false });
    }

    onChangeRadio = (e) => {
        this.setState({ requestType: e.target.value });
        if (this.state.requestType) this.setState({ requestTypeError: false });
    }

    handleSubmit = (evt) => {
        if (!this.state.firstName) this.setState({ firstnameError: true });
        if (!this.state.email) this.setState({ emailError: true });
        if (!this.state.phone) this.setState({ phoneError: true });
        //if (!this.state.businessName) this.setState({ businessNameError: true });
        if (!this.state.requestType) this.setState({ requestTypeError: true });
        evt.preventDefault();
        if (this.state.firstnameError == false && this.state.emailError == false && this.state.phoneError == false && this.state.requestTypeError == false) {
            let name = this.state.firstName;
            let email = this.state.email;
            let contactNo = this.state.phone;
            let venueName = this.state.businessName;
            let type = this.state.requestType;
            this.setState({ isLoad: true });
            axios
                .get(`https://barm8.com.au/api/VenueSignUps/createSignUp?params={"venueName": "${venueName}" , "name" : "${name}" , "type" : "${type}" , "email" : "${email}" , "contactNo": "${contactNo}"}`)
                .then(result => {
                    if (result.data && result.data.data && result.data.data.isSuccess) {
                        var link = document.createElement('a');
                        link.href = "https://barm8.com.au/thank-you?language=en";
                        document.body.appendChild(link);
                        link.click();
                        toast.success("Your request is sent!");
                    } else {
                        toast.error(`${result.data.data.message}`);
                        this.setState({ isLoad: false });
                    }
                }).catch((error) => {
                    toast.error(`Error!. Please try again.`);
                    this.setState({ isLoad: false });
                });
        } else {
            toast.error("Please try again!");
            this.setState({ isLoad: false });
        }
    }

    render() {
        const { firstName, email, phone, businessName } = this.state;
        return (

            <div id='contact'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h2>Schedule Your Free Demo</h2>
                            <p className='subtitle'>We’ll reach out within 24 hours to schedule your demo.</p>
                            <form id='contact-form' onSubmit={this.handleSubmit}>
                                <div className='form-group'>
                                    <input type="text" name="firstName" value={firstName}
                                        onChange={this.firstNameChange} className="form-control" placeholder="First and Last Name" />
                                    {this.state.firstnameError ? <span style={{ color: "red" }}>Name is required!</span> : ''}
                                </div>
                                <div className='form-group'>
                                    <input type="email" name="email" value={email}
                                        onChange={this.emailChange} className="form-control" placeholder="Email" />
                                    {this.state.emailError ? <span style={{ color: "red" }}>Email is required!</span> : ''}
                                </div>
                                <div className='form-group'>
                                    <input type="phone" name="phone" value={phone}
                                        onChange={this.phoneChange} className="form-control" placeholder="Phone Number" />
                                    {this.state.phoneError ? <span style={{ color: "red" }}>Phone number is required!</span> : ''}
                                </div>
                                <div className='form-group'>
                                    <input type="text" name="businessName" value={businessName}
                                        onChange={this.businessNameChange} className="form-control" placeholder="Business Name" />
                                    {/* {this.state.businessNameError ? <span style={{ color: "red" }}>Business name is required!</span> : ''} */}
                                </div>
                                <h3>Which best describes you?</h3>
                                <div className='form-group-inline' onChange={this.onChangeRadio}>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="requestType" id="requestType-1" value="I'm interested" />
                                        <label className="form-check-label" for="requestType-1">I'm interested</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="requestType" id="requestType-2" value="I'm already a customer" />
                                        <label className="form-check-label" for="requestType-2">I'm already a customer</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="requestType" id="requestType-3" value="I'm a guest" />
                                        <label className="form-check-label" for="requestType-3">I'm a guest</label>
                                    </div>
                                </div>
                                {this.state.requestTypeError ? <span style={{ color: "red" }}>Required!</span> : ''}
                                {
                                    this.state.isLoad == false ? <div >
                                        <button className='btn' type="submit">Get a Demo</button>
                                    </div> : <div >
                                        <button className='btn' type="button" disabled="disabled">Loading...</button>
                                    </div>
                                }

                            </form>
                            <div class='disc'>
                                By requesting a demo, you agree to receive automated text messages from BarM8. We’ll handle your info according to our <a className='privact'>privacy statement</a>.
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='image'>
                                <img src='./contact.png' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;