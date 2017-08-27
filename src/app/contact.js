import React from 'react';
import HeaderContactComponent from './headerContact.js';
import Container from './mapContainer.js';

export default class ContactComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="contact">
                <HeaderContactComponent />
                <div className="questionBox">
                    <div className="questionBoxTitle">Select question type</div>
                    <div className="questionBoxRow1">
                        <div className="questionBoxRow1Box">
                            <div className="questionBoxRow1BoxImgCnt">
                                <img className="questionBoxRow1Img" src="../images/services.png" alt="services" />
                            </div>
                            <div className="questionBoxRow1Content">
                                <div className="questionBoxRow1ContentText">
                                    <div className="questionBoxRow1BoxTitle">Services</div>
                                    <div className="questionBoxRow1BoxSubtitle">select</div>
                                </div>
                                <div className="questionBoxRow1CheckContainer">
                                </div>
                            </div>
                        </div>
                        <div className="questionBoxRow1Box">
                            <div className="questionBoxRow1BoxImgCnt">
                                <img className="questionBoxRow1Img" src="../images/payment.png" alt="services" />
                            </div>
                            <div className="questionBoxRow1Content">
                                <div className="questionBoxRow1ContentText">
                                    <div className="questionBoxRow1BoxTitle">Payment</div>
                                    <div className="questionBoxRow1BoxSubtitle">select</div>
                                </div>
                                <div className="questionBoxRow1CheckContainer">
                                </div>
                            </div>
                        </div>
                        <div className="questionBoxRow1Box">
                            <div className="questionBoxRow1BoxImgCnt">
                                <img className="questionBoxRow1Img" src="../images/other.png" alt="services" />
                            </div>
                            <div className="questionBoxRow1Content">
                                <div className="questionBoxRow1ContentText">
                                    <div className="questionBoxRow1BoxTitle">Other</div>
                                    <div className="questionBoxRow1BoxSubtitle">select</div>
                                </div>
                                <div className="questionBoxRow1CheckContainer">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="infoTitle">Personal information</div>
                    <div className="questionBoxRow2 clearfix">
                        <div className="questionBoxRow2NameInfo">
                            <div className="questionBoxRow2NameInfoText">Full name</div>
                            <div className="questionBoxRow2NameInfoInputBox">
                                <input type="text" placeholder="Enter name" />
                            </div>
                        </div>
                        <div className="questionBoxRow2EmailInfo">
                            <div className="questionBoxRow2EmailInfoText">Email</div>
                            <div className="questionBoxRow2EmailInfoInputBox">
                                <input type="text" placeholder="Enter email" />
                            </div>
                        </div>
                    </div>
                    <div className="phoneInfo">
                        <div className="phoneInfoTitle">Phone:</div>
                        <div className="phoneInfoInputBox">
                            <input type="text" placeholder="Enter phone" />
                        </div>
                    </div>
                    <div className="messageInfo">
                        <div className="messageInfoTitle">Message:</div>
                        <div className="messageInfoInputBox">
                            <textarea placeholder="Enter message" />
                        </div>
                    </div>
                    <a href="#" className="questionBoxButton">Send</a>
                </div>
                <div className="contactInfoMap">
                    <div className="contactInfo">
                        <div className="contactInfoTitle">Need our help?</div>
                        <div className="contactText">Don't hesitate to ask us anything.</div>
                        <div className="contactText">Our location is on:<br /><span>Trg Marka Marulića 23, Split, Croatia</span></div>
                        <div className="contactText">For any support issues, please email:<br /><span>info@explorecroatia.com</span></div>
                        <div className="contactText">
                            For further information on our product,<br />please email <span>sales@explorecroatia.com</span><br /> or call us at <span>1-888-898-8302</span>
                        </div>
                    </div>
                    <div className="contactMap"><Container /></div>
                    
                   
                </div>
            </div>
        );
    }
}

