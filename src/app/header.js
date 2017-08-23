import React from 'react';


export default class HeaderComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			width: window.outerWidth,
			height: 0,
			isMobileMenuClosed: true,
			menuIcon: '../images/hamburger.png',
			headerTopMenuClass: 'headerTopMenu',
			overflowHtml: true
		};

		this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() {
			var reelContainerWidth = window.outerWidth;
			// sets the width of reel-container state to (window size - 400px)
			this.setState({ width: reelContainerWidth });
  		}

  /**
   * Add event listener
   */
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
	/*this.updateDimensions;*/
  }

  

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  

	handleClick () {
		
		this.setState({isMobileMenuClosed: !this.state.isMobileMenuClosed, overflowHtml: !this.state.overflowHtml});
		switch(this.state.isMobileMenuClosed) {
			case false:
				this.setState({menuIcon: '../images/closeIcon.png', headerTopMenuClass: 'headerTopMenuMobile'});
				/*document.getElementsByTagName('html')[0].style.overflowY = 'hidden';*/		
				break;
			case true: 
				this.setState({menuIcon: '../images/hamburger.png', headerTopMenuClass: 'headerTopMenu'});
				/*document.getElementsByTagName('html')[0].style.overflowY = 'auto';*/
				break;
			default: break;
		}
	}
		

	

	/*mobileMenuHandler () {
		window.addEventListener("resize", this.updateWidth.bind(this));
		if(this.state.width < 768) {
			this.setState({menuIcon: '../images/closeIcon.png', headerTopMenuClass: 'headerTopMenuMobile'});
					
		}
		else {
			this.setState({headerTopMenuClass: 'headerTopMenu'});
					
		}
		this.mobileMenuHandler.bind(this);
	}*/



    render() {
        return (
			<div className="header">
				<div className="headerTop">
					<div className="headerTopTitle">
						<h1>EXPLOREcroatia</h1>
					</div>
					<div className="headerTopCallImg">
						<img src="../images/call.png" alt="call" /> 
					</div>
					<div className="headerTopPhone">
						+(0)385 91 5386 369
					</div>
					<ul className={this.state.headerTopMenuClass}>
						<li>Home</li>
						<li>Boats</li>
						<li>Apartments</li>
						<li>Explore</li>
						<li>Contact</li>
					</ul>
					<img src={this.state.menuIcon} className="menuIcon"  alt="menu" onClick={this.handleClick.bind(this)} />
				</div>
				<div className="headerMain">
					<div className="headerMainTitle">
						<h2>New adventure every day!</h2> 
					</div>
					<div className="headerMainText">
						Book homes, boats & trips to the prettiest destinations in the world.
						Experience places and fell real beauty of Croatian coast.
					</div>
					<div className="headerMainMenuList">
						<div className="headerMainMenuListItem">
							<img className="boatIcon" src="../images/boatIcon.png" alt="boat" />
							<div className="headerMainMenuListItemText">Choose boat type</div>
							<img className="backIcon" src="../images/backIcon.png" alt="back" />
						</div>
						<div className="headerMainMenuListItem">
							<img className="peopleIcon" src="../images/peopleIcon.png" alt="boat" />
							<div className="headerMainMenuListItemText">Number of people</div>
							<img className="backIcon" src="../images/backIcon.png" alt="back" />
						</div>
						<div className="headerMainMenuListItem">
							<img className="dateIcon" src="../images/dateIcon.png" alt="boat" />
							<div className="headerMainMenuListItemText">Starting date</div>
							<img className="backIcon" src="../images/backIcon.png" alt="back" />
						</div>
						<div className="headerMainMenuListItem">
							<img className="dateIcon" src="../images/dateIcon.png" alt="boat" />
							<div className="headerMainMenuListItemText">Ending date</div>
							<img className="backIcon" src="../images/backIcon.png" alt="back" />
						</div>
						<div className="headerMainMenuListButton">Search</div>
					</div>
				</div>
				<div className="headerVideo">
					<div className="headerVideoText">WATCH VIDEO</div>
					<div className="headerVideoImg">
						<img className="playIcon" src="../images/playIcon.png" alt="play" />
					</div>
				</div>
			</div>
        );
    }
}