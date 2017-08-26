import React from 'react';

let isMobileMenuClosed = true;

export default class HeaderComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			width: window.innerWidth,
			isMobileMenuClosed: true,
			menuIcon: '../images/hamburger.png',
			headerTopMenuClass: 'headerTopMenu',
		};

		this.updateDimensions = this.updateDimensions.bind(this);
		this.hideMenuWhenResizing = this.hideMenuWhenResizing.bind(this);
		this.showMenuWhenResizing =  this.showMenuWhenResizing.bind(this);
	}

	updateDimensions() {
		var reelContainerWidth = window.innerWidth;
		this.setState({ width: reelContainerWidth });
		if (this.state.width > 767) {
			this.hideMenuWhenResizing();
		}
		else {
			if (isMobileMenuClosed == false) {
				this.showMenuWhenResizing();
			}
		}
	}

	/**
	 * Add event listener
	 */
	componentDidMount() {
		window.addEventListener("resize", this.updateDimensions);
	}



	/**
	 * Remove event listener
	 */
	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions);
	}

	handleClick() {
		isMobileMenuClosed = !isMobileMenuClosed;
		/*this.setState({isMobileMenuClosed: !this.state.isMobileMenuClosed});
		console.log(this.state.isMobileMenuClosed);*/
		switch (isMobileMenuClosed) {
			case false:
				this.setState({ menuIcon: '../images/closeIcon.png', headerTopMenuClass: 'headerTopMenuMobile' });
				document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
				break;
			case true:
				this.setState({ menuIcon: '../images/hamburger.png', headerTopMenuClass: 'headerTopMenu' });
				document.getElementsByTagName('html')[0].style.overflowY = 'auto';
				break;
			default: break;
		}
	}

	hideMenuWhenResizing() {
		document.getElementsByTagName('html')[0].style.overflowY = 'auto';
		this.setState({ headerTopMenuClass: 'headerTopMenu' });

	}

	showMenuWhenResizing() {
		this.setState({ headerTopMenuClass: 'headerTopMenuMobile' });
		document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
	}

	render() {
		return (
			<div className="header">
				<div className="headerTop">
					<div className="headerTopTitle">
						<h1><span>EXPLORE</span>croatia</h1>
					</div>
					<div className="headerTopCallImg">
						<img src="../images/call.png" alt="call" />
					</div>
					<div className="headerTopPhone">
						+(0)385 91 5386 369
					</div>
					<ul className={this.state.headerTopMenuClass}>
						<li><a title="Home" href="#">Home</a></li>
						<li><a title="Boats" href="#">Boats</a></li>
						<li><a title="Apartments" href="#">Apartments</a></li>
						<li><a title="Explore" href="#">Explore</a></li>
						<li><a title="Contacts" href="#">Contact</a></li>
					</ul>
					<img src={this.state.menuIcon} className="menuIcon" alt="menu" onClick={this.handleClick.bind(this)} />
				</div>
				<div className="headerMain">
					<div className="headerMainTitle">
						<h2><span>New adventure</span> every day!</h2>
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