import React from 'react';
import { Link } from 'react-router-dom';

let isMobileMenuClosed = true;

export default class HeaderTop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            width: window.innerWidth,
            isMobileMenuClosed: true,
            menuIcon: '../../images/hamburger.png',
            headerTopMenuClass: 'headerTopMenu',
        };

        this.updateDimensions = this.updateDimensions.bind(this);
        this.hideMenuWhenResizing = this.hideMenuWhenResizing.bind(this);
        this.showMenuWhenResizing = this.showMenuWhenResizing.bind(this);
        this.returnBodyScroll = this.returnBodyScroll.bind(this);
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
                this.setState({ menuIcon: '../../images/closeIcon.png', headerTopMenuClass: 'headerTopMenuMobile' });
                document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
                break;
            case true:
                this.setState({ menuIcon: '../../images/hamburger.png', headerTopMenuClass: 'headerTopMenu' });
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
        window.scrollTo(0, 0);
    }

    //return body scrolling after link is selected in menu mobile
    returnBodyScroll() {
        document.getElementsByTagName('body')[0].style.overflowY = 'auto';
        isMobileMenuClosed = true;
    }

    render() {
        return (
            <div className="headerTop">
                <div className="headerTopLeft">
                    <div className="headerTopTitle">
                        <h1><span>EXPLORE</span>croatia</h1>
                    </div>
                    <div className="headerTopCallImg">
                        <img src="../../images/call.png" alt="call" />
                    </div>
                    <div className="headerTopPhone">
                        +(0)385 91 5386 369
						</div>
                </div>
                <ul className={this.state.headerTopMenuClass}>
                    <li><Link to="/" onClick={this.returnBodyScroll}><a title="Home">Home</a></Link></li>
                    <li><Link to="/Boats" onClick={this.returnBodyScroll}><a title="Boats">Boats</a></Link></li>
                    <li><Link to="/Apartments" onClick={this.returnBodyScroll}><a title="Apartments">Apartments</a></Link></li>
                    <li><Link to="/Explore" onClick={this.returnBodyScroll}><a title="Explore">Explore</a></Link></li>
                    <li><Link to="/Contact" onClick={this.returnBodyScroll}><a title="Contact">Contact</a></Link></li>
                </ul>
                <img src={this.state.menuIcon} className="menuIcon" alt="menu" onClick={this.handleClick.bind(this)} />
            </div>
        )
    }
} 