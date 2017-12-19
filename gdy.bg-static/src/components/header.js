const React = require('react');


// const SearchField = require('../containers/search_field');
const Greeting = require('./greeting');
const SourceList = require('./sourceList');
const SocialMenu = require('./socialMenu');
const SearchField = require('./searchField');

const Radium = require('radium');
const { StyleRoot } = Radium;
const Style = Radium.Style;

class Header extends React.Component {

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
                            <a href="index.html" title="Vogue" className="">
                                <img src={`${process.env.PUBLIC_URL}/img/logo.png`} />
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
                                        <a href="index.html" title="Vogue" className="">
                                            <img src={`${process.env.PUBLIC_URL}/img/logo.png`} />
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
                                            <a href="index.html#" className="n-main__nav-link n-main__dropdown-link">
                                                <span>Follow</span>
                                            </a>
                                            <SocialMenu isMobile={false} />
                                        </li>

                                        <li className="n-main__list-item">
                                            <SearchField isMobile={false} />
                                        </li>
                                    </ul>
                                    {/* <!--  social menu desktop end --> */}
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="n-menu">

                    <nav className="n-menu__nav">
                        {/* <!-- source nav - mobile - begin --> */}
                        <SourceList isMobile={true} />
                        {/* <!-- source nav - mobile - end --> */}
                    </nav>



                </div>
            </header>
        );
    }
}

module.exports = Radium(Header);