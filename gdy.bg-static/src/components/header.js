const React = require('react');
const connect = require('react-redux').connect;
const bindActionCreators = require('redux').bindActionCreators;
const goHome = require('../actions/index').goHome;
const goToNewsletterSignup = require('../actions/index').goToNewsletterSignup;
const Greeting = require('./greeting');
const SourceList = require('./sourceList');
const SocialMenu = require('./socialMenu');
const SearchField = require('./searchField');

class Header extends React.Component {
    
    click() {
        this.props.goHome();
    }
    
    goToNewsletterSignup() {
        this.props.goToNewsletterSignup();
    }
    
    render() {

        return (

            <header className="n-main">
                <div className="n-main__wrapper">
                    {/* <!--desktop greeting begin--> */}
                    <Greeting />
                    {/* <!--desktop greeting end--> */}

                    {/* <!-- middle logo desktop begin --> */}
                    <div className="n-main__header n-visibility--desktop">
                        <div className="n-main__header-logo">
                            <a onClick={this.click.bind(this)} title="Vogue" className="">
                                <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="" />
                            </a>
                        </div>
                    </div>
                    {/* <!-- middle logo desktop end --> */}
                    <div className="n-main__sticker">
                        <div className="n-main__sticker-child">

                            <nav className="n-main__nav">
                                {/* <!-- source nav - desktop - begin --> */}
                                <SourceList isMobile={false} />
                                {/* <!-- source nav - desktop - end --> */}

                                {/* <!-- small logo mobile begin --> */}
                                <div className="n-main__nav-group n-main__nav-group--left">
                                    <div className="n-main__nav-logo is-hidden">
                                        <a onClick={this.click.bind(this)} title="Vogue" className="">
                                            <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="" />
                                        </a>
                                    </div>
                                </div>
                                {/* <!--  small logo mobile end --> */}

                                {/* <!--  hamburger menu begin --> */}
                                <div className="n-main__nav-group n-main__nav-group--right">
                                    <div className="n-main__nav-hamburger n-visibility--mobile">
                                        <label htmlFor="chkNavHamburger" className='n-main__nav-hamburger__icon'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16">
                                                <title>menu</title>
                                                <path d="M20 16H0v-2h20v2zm0-7H0V7h20v2zm0-7H0V0h20v2z" />
                                            </svg>
                                        </label>
                                        <label htmlFor="chkNavHamburger" className='n-main__nav-hamburger__close-icon global__hidden'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.02 17.98">
                                                <title>close</title>
                                                <path d="M18.02 1.42L16.61 0l-7.6 7.58L1.41 0 0 1.42l7.59 7.57L0 16.56l1.41 1.42 7.6-7.58 7.6 7.58 1.41-1.42-7.59-7.57 7.59-7.57z"
                                                />
                                            </svg>
                                        </label>
                                    </div>
                                    {/* <!--  hamburger menu end but do not forget to close the div --> */}
                                    {/* <!--  social menu desktop begin --> */}
                                    <ul className="global__list-reset n-main__list n-visibility--desktop">

                                        <li className="n-main__list-item n-main__dropdown n-main__dropdown--follow">
                                            <a onClick={this.click.bind(this)} className="n-main__nav-link n-main__dropdown-link">
                                                <span>Follow</span>
                                            </a>
                                            <SocialMenu isMobile={false} />
                                        </li>

                                        <li className="n-main__list-item">
                                            <div className="n-main__nav-search">
                                                <label htmlFor="chkNavSearch" className="n-main__nav-search__icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                        <path d="M18.5 19.9l-5.6-5.7c-1.3 1-3 1.7-4.9 1.7-4.4 0-8-3.5-8-7.9s3.6-8 8-8 7.9 3.6 7.9 7.9c0 1.8-.6 3.5-1.7 4.9l5.6 5.7-1.3 1.4zM8 2C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z"
                                                        />
                                                    </svg>
                                                </label>
                                                <label htmlFor="chkNavSearch" className="global__hidden n-main__nav-search__close-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.02 17.98">
                                                        <title>close</title>
                                                        <path d="M18.02 1.42L16.61 0l-7.6 7.58L1.41 0 0 1.42l7.59 7.57L0 16.56l1.41 1.42 7.6-7.58 7.6 7.58 1.41-1.42-7.59-7.57 7.59-7.57z"
                                                        />
                                                    </svg>
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                    {/* <!--  social menu desktop end --> */}
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="n-menu">
                    <SearchField isMobile={true} />
                    <nav className="n-menu__nav">
                        {/* <!-- source nav - mobile - begin --> */}
                        <SourceList isMobile={true} />
                        {/* <!-- source nav - mobile - end --> */}
                    </nav>

                    {/* <!--  social menu mobile begin --> */}
                    <div className="n-menu__social">
                        <h4 className="n-menu__social-title">
                            <span className='n-menu__social-brand'>Follow </span>
                        </h4>
                        <SocialMenu isMobile={true} />
                    </div>

                    <div className="global__a--center">
                        <a onClick={this.goToNewsletterSignup.bind(this)} className="n-menu__newsletter-btn">Newsletter Sign Up</a>
                    </div>
                    <Greeting isMobile={true}/>
                    {/* <!--  social menu mobile end --> */}
                </div>
            </header>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ goHome, goToNewsletterSignup }, dispatch);
}

module.exports = connect(null, mapDispatchToProps)(Header);
