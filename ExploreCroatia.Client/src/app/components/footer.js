import React from 'react';


export default class FooterComponent extends React.Component {
    render() {
        return (
			<div className="footer">
				<div className="footerLeft">
                    <div className="footerLeftLogo">
                        <h2>TEHNIČAR D.O.O.</h2>
                    </div>
                    <div className="footerLeftText">
                        Lored Khalem ipsum is a major key to success. Surround
                        yourself with angels. Bless up. Special cloth alert. 
                        Hammock talk come soon. Egg whites, turkey sausage, 
                        wheat toast, water.
                    </div>
                    <div className="footerLeftTextBottomOne">
                        Built with <img src="../../images/heartIcon.png" alt="heart" /> in Croatia.
                    </div>
                    <div className="footerLeftTextBottomTwo">
                        bluebit.agency
                    </div>
                </div>
                <div className = "footerRight">
                    <div className="footerRightTitle">Contact Us </div>
                    <div className="footerRightText">
                        Lored Khalem Ipsum is a major key to success. Surround yourself
                        with angels. Bless up. Special cloth alert.
                    </div>
                    <div className="footerRightInfo">
                        <div className="footerRightInfoPhone">+(0)385 91 1234 567</div>
                        <div className="footerRightInfoAddress">help@seatresute.com</div>
                    </div>
                </div>
			</div>
        );
    }
}