import React from 'react';
import { DatePicker } from 'antd';
import HeaderTop from './headerTop.js';

export default class HeaderComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			startDateText: 'Starting date',
			endDateText: 'Ending date'
		};

		this.onStartDateChange = this.onStartDateChange.bind(this);
		this.onEndDateChange = this.onEndDateChange.bind(this);
	}

	onStartDateChange(date, dateString) {
		this.setState({ startDateText: dateString });
	}

	onEndDateChange(date, dateString) {
		this.setState({ endDateText: dateString });
	}

	render() {
		return (
			<div className="header">
				<HeaderTop />
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

							<img className="boatIcon" src="../../images/boatIcon.png" alt="boat" />
							<div className="headerMainMenuListItemText">Choose boat type</div>
							<img className="backIcon" src="../../images/backIcon.png" alt="back" />
						</div>
						<div className="headerMainMenuListItem">
							<img className="peopleIcon" src="../../images/peopleIcon.png" alt="boat" />
							<div className="headerMainMenuListItemText">Number of people</div>
							<img className="backIcon" src="../../images/backIcon.png" alt="back" />
						</div>
						<div className="headerMainMenuListItem">
							<DatePicker className="datePicker" onChange={this.onStartDateChange} />
							<img className="dateIcon" src="../../images/dateIcon.png" alt="boat" />
							<div className="headerMainMenuListItemText">{this.state.startDateText}</div>
							<img className="backIcon" src="../../images/backIcon.png" alt="back" />
						</div>
						<div className="headerMainMenuListItem">
							<DatePicker className="datePicker" onChange={this.onEndDateChange} />
							<img className="dateIcon" src="../../images/dateIcon.png" alt="boat" />
							<div className="headerMainMenuListItemText">{this.state.endDateText}</div>
							<img className="backIcon" src="../../images/backIcon.png" alt="back" />
						</div>
						<div className="headerMainMenuListButton">Search</div>
					</div>
				</div>
				<div className="headerVideo">
					<div className="headerVideoText">WATCH VIDEO</div>
					<div className="headerVideoImg">
						<img className="playIcon" src="../../images/playIcon.png" alt="play" />
					</div>
				</div>
				<div className="headerBottom">
					<div className="headerBottomTitle"><span>See </span> How It Works</div>
					<div className="headerBottomContent">
						<div className="headerBottomItem">
							<img className="headerBottomIcon" src="../../images/iconFind.png" alt="find" />
							<div className="headerBottomItemText">
								<div className="headerBottomItemTextTitle"><span>Find </span> what to do</div>
								<div className="headerBottomItemTextDesc">
									Lored khalem ipsum is a major key to success. The key is to drink coconut,
									the fresh coconut, trust me. Celebrate success right, the only way.
								</div>
							</div>
						</div>
						<div className="headerBottomItem">
							<img className="headerBottomIcon" src="../../images/iconPay.png" alt="find" />
							<div className="headerBottomItemText">
								<div className="headerBottomItemTextTitle"><span>Choose </span>payment method</div>
								<div className="headerBottomItemTextDesc">
									After you choose to rent apartment, boat or just explore coast privately, choose
									payment method and bezbrižno dođite i have fun.
								</div>
							</div>
						</div>
						<div className="headerBottomItem">
							<img className="headerBottomIcon" src="../../images/iconExp.png" alt="find" />
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