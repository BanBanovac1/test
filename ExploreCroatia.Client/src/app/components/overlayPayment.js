import React from 'react';
import ReactDOM from 'react-dom';
import {DatePicker} from 'antd';

export default class OverlayPayment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedBox: 'paymentPriceBoxSelected',
            notSelectedBox: 'paymentPriceBoxNotSelected',
            isClicked1: true,
            isClicked2: false
        }

        this.closeOverlayPayment = this.closeOverlayPayment.bind(this);
        this.openSuccessForm = this.openSuccessForm.bind(this);
        this.openPaymentForm = this.openPaymentForm.bind(this);
        this.closeSuccessForm = this.closeSuccessForm.bind(this);
        this.updateIsClicked = this.updateIsClicked.bind(this);
        this.updateDateInput = this.updateDateInput.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
    }

    closeOverlayPayment() {
        let overlayPayment = ReactDOM.findDOMNode(this.refs.overlayPayment);
        overlayPayment.style.display = 'none';
        this.props.triggerUpdatePaymentState();
        this.openPaymentForm();
        this.clearInputs();
        this.closeSuccessForm();
    }

    openPaymentForm() {
        let paymentForm = ReactDOM.findDOMNode(this.refs.paymentForm);
        paymentForm.style.display = 'block';
    }

    openSuccessForm() {
        let fullName = ReactDOM.findDOMNode(this.refs.fullName);
        let email = ReactDOM.findDOMNode(this.refs.email);
        let address = ReactDOM.findDOMNode(this.refs.address);
        let phone = ReactDOM.findDOMNode(this.refs.phone);
        let cardNumber = ReactDOM.findDOMNode(this.refs.cardNumber);
        let date = ReactDOM.findDOMNode(this.refs.date);
        let security = ReactDOM.findDOMNode(this.refs.security);
        let inputs = [fullName, email, address, phone, cardNumber, date, security];

        //if one of the fields is empty, don't open success form
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = inputs[i].value.trim();
            if (inputs[i].value === '') {
                inputs[i].focus();
                return false;
            }
        }
        let paymentForm = ReactDOM.findDOMNode(this.refs.paymentForm);
        paymentForm.style.display = 'none';
        let successForm = ReactDOM.findDOMNode(this.refs.successForm);
        successForm.style.display = 'block';
        successForm.scrollIntoView();

    }

    clearInputs() {
        let fullName = ReactDOM.findDOMNode(this.refs.fullName);
        let email = ReactDOM.findDOMNode(this.refs.email);
        let address = ReactDOM.findDOMNode(this.refs.address);
        let phone = ReactDOM.findDOMNode(this.refs.phone);
        let cardNumber = ReactDOM.findDOMNode(this.refs.cardNumber);
        let date = ReactDOM.findDOMNode(this.refs.date);
        let security = ReactDOM.findDOMNode(this.refs.security);
        let inputs = [fullName, email, address, phone, cardNumber, date, security];

        for(let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }

    }

    closeSuccessForm() {
        let successForm = ReactDOM.findDOMNode(this.refs.successForm);
        successForm.style.display = 'none';
    }

    updateIsClicked() {
        this.setState({ isClicked1: !this.state.isClicked1, isClicked2: !this.state.isClicked2 });
    }

    updateDateInput(date, dateString) {
        let dateInput = ReactDOM.findDOMNode(this.refs.date);
        dateInput.value = dateString;
    }

    render() {
        return (
            <div ref="overlayPayment" className="overlayPayment">
                <div ref="paymentForm" className="paymentForm">
                    <img className="paymentClose" src="../../images/closeIcon.png" alt="closeIcon" onClick={this.closeOverlayPayment} />
                    <img className="paymentPersonalIcon" src="../../images/personalIcon.png" alt="personalIcon" />
                    <div className="paymentFirstTitle">Personal informations</div>
                    <div className="paymentFirstSubtitle">Add your personal info</div>
                    <hr />
                    <div className="paymentFirstRow1">
                        <div className="fullNameItem">
                            <div className="fullNameLabel">Full name:</div>
                            <div className="fullNameInput">
                                <input ref="fullName" type="text" placeholder="Enter name" />
                            </div>
                        </div>
                        <div className="emailItem">
                            <div className="emailLabel">Email:</div>
                            <div className="emailInput">
                                <input ref="email" type="text" placeholder="Enter email" />
                            </div>
                        </div>
                    </div>
                    <div className="paymentFirstRow2">
                        <div className="addressItem">
                            <div className="addressLabel">Address:</div>
                            <div className="addressInput">
                                <input ref="address" type="text" placeholder="Enter address" />
                            </div>
                        </div>
                        <div className="phoneItem">
                            <div className="phoneLabel">Phone:</div>
                            <div className="phoneInput">
                                <input ref="phone" type="text" placeholder="Enter phone" />
                            </div>
                        </div>
                    </div>
                    <div className="noteItem">
                        <div className="noteLabel">Note:</div>
                        <div className="noteInput">
                            <textarea placeholder="Enter note (optional)" />
                        </div>
                    </div>
                    <hr />
                    <img className="paymentInfoIcon" src="../../images/iconPay.png" alt="paymentIcon" />
                    <div className="paymentSecondTitle">Payment informations</div>
                    <div className="paymentSecondSubtitle">Add your payment info</div>
                    <hr />
                    <div className="paymentSelectTitle">Select price to pay:</div>
                    <div className="paymentPriceAlign">
                        <div className={this.state.isClicked1 ? this.state.selectedBox : this.state.notSelectedBox} onClick={this.updateIsClicked}>
                            <div className="dot">
                                <div className="innerDot"></div>
                            </div>
                            <div className="paymentPriceBoxPrice">3600<span>€</span></div>
                            <div className="paymentPriceBoxText">Pay full price</div>
                        </div>
                        <div className={this.state.isClicked2 ? this.state.selectedBox : this.state.notSelectedBox} onClick={this.updateIsClicked}>
                            <div className="dot">
                                <div className="innerDot"></div>
                            </div>
                            <div className="paymentPriceBoxPrice">360<span>€</span></div>
                            <div className="paymentPriceBoxText">Pay deposit</div>
                        </div>
                    </div>
                    <div className="paymentCardInfo">
                        <div className="cardNumberItem">
                            <div className="cardNumberLabel">Card number:</div>
                            <div className="cardNumberInput">
                                <input ref="cardNumber" type="text" placeholder="Enter card number" />
                            </div>
                        </div>
                        <div className="dateItem">
                            <div className="dateLabel">Date:</div>
                            <div className="dateInput">
                                <DatePicker className="datePicker" onChange={this.updateDateInput}/>
                                <input ref="date" type="text" />
                            </div>
                        </div>
                        <div className="securityItem">
                            <div className="securityLabel">Security number:</div>
                            <div className="securityInput">
                                <input ref="security" type="text" />
                            </div>
                        </div>
                    </div>
                    <a className="paymentButton" onClick={this.openSuccessForm}>Book & pay</a>
                </div>
                <div ref="successForm" className="successForm">
                    <img className="successClose" src="../../images/closeIcon.png" alt="closeIcon" onClick={this.closeOverlayPayment} />
                    <img className="successIcon" src="../../images/successIcon.png" alt="successIcon" />
                    <div className="successTitle">Thank you for booking</div>
                    <div className="successText">
                        Information will be sent to your email address.<br />
                        Please check out your mail and if you don't see message.<br />
                        Check out your spam folder. Cheers from Croatia.
                    </div>
                    <a className="successButton">Go to gome</a>
                </div>

            </div>
        );
    }
}