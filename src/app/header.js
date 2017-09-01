import React from 'react';
import {DatePicker} from 'antd';

let isMobileMenuClosed = true;

export default class HeaderComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			width: window.innerWidth,
			isMobileMenuClosed: true,
			menuIcon: '../images/hamburger.png',
			headerTopMenuClass: 'headerTopMenu',
			startDateText: 'Starting date',
			endDateText: 'Ending date'
		};

		this.updateDimensions = this.updateDimensions.bind(this);
		this.hideMenuWhenResizing = this.hideMenuWhenResizing.bind(this);
		this.showMenuWhenResizing =  this.showMenuWhenResizing.bind(this);
		this.onStartDateChange = this.onStartDateChange.bind(this);
		this.onEndDateChange = this.onEndDateChange.bind(this);
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
				document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
				break;
			case true:
				this.setState({ menuIcon: '../images/hamburger.png', headerTopMenuClass: 'headerTopMenu' });
				document.getElementsByTagName('body')[0].style.overflowY = 'auto';
				break;
			default: break;
		}
	}

	hideMenuWhenResizing() {
		document.getElementsByTagName('body')[0].style.overflowY = 'auto';
		this.setState({ headerTopMenuClass: 'headerTopMenu' });

	}

	showMenuWhenResizing() {
		this.setState({ headerTopMenuClass: 'headerTopMenuMobile' });
		document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
	}

	onStartDateChange (date, dateString) {
		this.setState({startDateText: dateString});
	}
	
	onEndDateChange (date, dateString) {
		this.setState({endDateText: dateString});
	}

	render() {
		return (
			<div className="header">
				<div className="headerTop">
					<div className="headerTopLeft">
						<div className="headerTopTitle">
							<h1><span>EXPLORE</span>croatia</h1>
						</div>
						<div className="headerTopCallImg">
							<img src="../images/call.png" alt="call" />
						</div>
						<div className="headerTopPhone">
							+(0)385 91 5386 369
						</div>
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
							<DatePicker className="datePicker" onChange={this.onStartDateChange}/>
							<img className="dateIcon" src="../images/dateIcon.png" alt="boat" />
							<div className="headerMainMenuListItemText">{this.state.startDateText}</div>
							<img className="backIcon" src="../images/backIcon.png" alt="back" />
						</div>
						<div className="headerMainMenuListItem">
							<DatePicker className="datePicker" onChange={this.onEndDateChange} />
							<img className="dateIcon" src="../images/dateIcon.png" alt="boat" />
							<div className="headerMainMenuListItemText">{this.state.endDateText}</div>
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
				<div className="headerBottom">
					<div className="headerBottomTitle"><span>See </span> How It Works</div>
					<div className="headerBottomContent">
						<div className="headerBottomItem">
							<img className="headerBottomIcon" src="../images/iconFind.png" alt="find" />
							<div className="headerBottomItemText">
								<div className="headerBottomItemTextTitle"><span>Find </span> what to do</div>
								<div className="headerBottomItemTextDesc">
									Lored khalem ipsum is a major key to success. The key is to drink coconut,
									the fresh coconut, trust me. Celebrate success right, the only way.
								</div>
							</div>
						</div>
						<div className="headerBottomItem">
							<img className="headerBottomIcon" src="../images/iconPay.png" alt="find" />
							<div className="headerBottomItemText">
								<div className="headerBottomItemTextTitle"><span>Choose </span>payment method</div>
								<div className="headerBottomItemTextDesc">
									After you choose to rent apartment, boat or just explore coast privately, choose
									payment method and bezbrižno dođite i have fun.
								</div>
							</div>
						</div>
						<div className="headerBottomItem">
							<img className="headerBottomIcon" src="../images/iconExp.png" alt="find" />
							<div className="headerBottomItemText">
								<div className="headerBottomItemTextTitle"><span>Experience </span>Croatia</div>
								<div className="headerBottomItemTextDesc">
									Go and have good time. Discover untouched nature, old castles, war or just have
									fun with friends on a boat or a private excursion.
								</div>
							</div>
						</div>
					</div> 
				</div>
			</div>
		);
	}
}