import React from 'react';
import ReactDOM from 'react-dom';
import HeaderContactComponent from '../components/headerContact.js';
import Container from '../components/mapContainer.js';

export default class ContactComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isClicked1: false,
            isClicked2: false,
            isClicked3: false
        };

        this.handleBoxClick = this.handleBoxClick.bind(this);
        this.changeBorder = this.changeBorder.bind(this);
        this.showCheckIcon = this.showCheckIcon.bind(this);
    }

    handleBoxClick(event) {
        let indexValue = event.currentTarget.getAttribute('data-index');
        switch (indexValue) {
            case '1':
                this.setState({ isClicked1: !this.state.isClicked1 }, function(){
                    this.changeBorder(indexValue);
                    this.showCheckIcon(indexValue);
                });           
                break;
            case '2':
                this.setState({ isClicked2: !this.state.isClicked2 },  function(){
                    this.changeBorder(indexValue);
                    this.showCheckIcon(indexValue);
                });
                break;
            case '3':
                this.setState({ isClicked3: !this.state.isClicked3 }, function(){
                    this.changeBorder(indexValue);
                    this.showCheckIcon(indexValue);
                });
                break;
            default: break;
        }
    }

    changeBorder(a) {
        let qBox1 = ReactDOM.findDOMNode(this.refs.questionBox1);
        let qBox2 = ReactDOM.findDOMNode(this.refs.questionBox2);
        let qBox3 = ReactDOM.findDOMNode(this.refs.questionBox3);

        switch(a){
            case '1': 
                if(this.state.isClicked1 === true){
                    qBox1.style.borderColor = '#09c7ff';
                }
                else {
                    qBox1.style.borderColor = '#c1cbd2';
                }
                break;
            case '2': 
                if(this.state.isClicked2 === true) {
                   qBox2.style.borderColor = '#09c7ff'; 
                }
                else {
                    qBox2.style.borderColor = '#c1cbd2';
                }
                break;
            case '3': 
                if(this.state.isClicked3 === true) {
                    qBox3.style.borderColor = '#09c7ff';
                }
                else {
                    qBox3.style.borderColor = '#c1cbd2';
                }
                break;
            default: break;
               
        }
    }

    showCheckIcon(a) {
        let cBox1 = ReactDOM.findDOMNode(this.refs.checkBox1);
        let cIcon1 = ReactDOM.findDOMNode(this.refs.checkIcon1);
        let cBox2 = ReactDOM.findDOMNode(this.refs.checkBox2);
        let cIcon2 = ReactDOM.findDOMNode(this.refs.checkIcon2);
        let cBox3 = ReactDOM.findDOMNode(this.refs.checkBox3);
        let cIcon3 = ReactDOM.findDOMNode(this.refs.checkIcon3);

        switch(a) {
            case '1': 
                if(this.state.isClicked1 === true) {
                    cBox1.style.border = 'none';
                    cIcon1.style.display = 'block';
                }
                else {
                    cBox1.style.border = '1px solid #c1cbd2';
                    cIcon1.style.display = 'none';
                }
                break;
            case '2':
                 if(this.state.isClicked2 === true) {
                    cBox2.style.border = 'none';
                    cIcon2.style.display = 'block';
                }
                else {
                    cBox2.style.border = '1px solid #c1cbd2';
                    cIcon2.style.display = 'none';
                }
                break;
            case '3': 
                 if(this.state.isClicked3 === true) {
                    cBox3.style.border = 'none';
                    cIcon3.style.display = 'block';
                }
                else {
                    cBox3.style.border = '1px solid #c1cbd2';
                    cIcon3.style.display = 'none';
                }
                break;
            default: break;
        }
        
    }

    render() {
        return (
            <div className="contact">
                <HeaderContactComponent />
                <div className="questionBox">
                    <div className="questionBoxTitle">Select question type</div>
                    <div className="questionBoxRow1">
                        <div ref="questionBox1" data-index={1} className="questionBoxRow1Box" onClick={this.handleBoxClick}>
                            <div className="questionBoxRow1BoxImgCnt">
                                <img className="questionBoxRow1Img" src="../../images/services.png" alt="services" />
                            </div>
                            <div className="questionBoxRow1Content">
                                <div className="questionBoxRow1ContentText">
                                    <div className="questionBoxRow1BoxTitle">Services</div>
                                    <div className="questionBoxRow1BoxSubtitle">select</div>
                                </div>
                                <div ref="checkBox1" className="questionBoxRow1CheckContainer">
                                    <img ref="checkIcon1" className="checkIcon" src="../../images/checkIcon.png" alt="checkIcon" />
                                </div>
                            </div>
                        </div>
                        <div ref="questionBox2" data-index={2} className="questionBoxRow1Box" onClick={this.handleBoxClick}>
                            <div className="questionBoxRow1BoxImgCnt">
                                <img className="questionBoxRow1Img" src="../../images/payment.png" alt="services" />
                            </div>
                            <div className="questionBoxRow1Content">
                                <div className="questionBoxRow1ContentText">
                                    <div className="questionBoxRow1BoxTitle">Payment</div>
                                    <div className="questionBoxRow1BoxSubtitle">select</div>
                                </div>
                                <div ref="checkBox2" className="questionBoxRow1CheckContainer" >
                                    <img ref="checkIcon2" className="checkIcon" src="../../images/checkIcon.png" alt="checkIcon" />
                                </div>

                            </div>
                        </div>
                        <div ref="questionBox3" data-index={3} className="questionBoxRow1Box" onClick={this.handleBoxClick}>
                            <div className="questionBoxRow1BoxImgCnt">
                                <img className="questionBoxRow1Img" src="../../images/other.png" alt="services" />
                            </div>
                            <div className="questionBoxRow1Content">
                                <div className="questionBoxRow1ContentText">
                                    <div className="questionBoxRow1BoxTitle">Other</div>
                                    <div className="questionBoxRow1BoxSubtitle">select</div>
                                </div>
                                <div ref="checkBox3"className="questionBoxRow1CheckContainer" >
                                    <img ref="checkIcon3"className="checkIcon" src="../../images/checkIcon.png" alt="checkIcon" />
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

