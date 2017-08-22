var React = require('react');
var ReactDOM = require('react-dom');

require('../styles/main.scss');

//Create component
class TodoComponent extends React.Component{
	
	render() {
		
		return(
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
					<ul className="headerTopMenu">
						<li>Home</li>
						<li>Boats</li>
						<li>Apartments</li>
						<li>Explore</li>
						<li>Contact</li>
					</ul>
					<img src="../images/hamburger.png" className="menuIcon"  alt="menu" />
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



//put component into html pageX
ReactDOM.render(<TodoComponent />, document.getElementById('app-wrapper'));