const React = require('react');


// const SearchField = require('../containers/search_field');
const Greeting = require('./greeting');
const SourceList = require('./sourceList');

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
                                    {/* <!--  follow menu desktop begin --> */}
                                    <ul className="global__list-reset n-main__list n-visibility--desktop">

                                        <li className="n-main__list-item n-main__dropdown n-main__dropdown--follow">
                                            <a href="index.html#" className="n-main__nav-link n-main__dropdown-link">
                                                <span>Follow</span>
                                            </a>
                                            <ul className="global__list-reset n-main__dropdown-list n-main__dropdown-list--right n-main__dropdown-list--follow">
                                                <li className="n-main__list-item n-main__dropdown-list-item">
                                                    <div className="n-main__dropdown--follow__group">
                                                        <a href="https://www.facebook.com/BritishVogue/" title="Facebook" className="n-main__dropdown__btn-share n-main__dropdown__btn-share--facebook">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                                <path d="M5.9 3.1v2.2H4.3V8h1.6v8h3.3V8h2.2s.2-1.3.3-2.7H9.2V3.4c0-.3.4-.6.7-.6h1.8V0H9.3C5.8 0 5.9 2.7 5.9 3.1zm0 0" />
                                                            </svg>
                                                        </a>
                                                        <a href="http://www.twitter.com/BritishVogue" title="Twitter" className="n-main__dropdown__btn-share n-main__dropdown__btn-share--twitter">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                                <path d="M14.4 4.7v.4c0 4.3-3.3 9.3-9.3 9.3-1.9 0-3.6-.5-5-1.5h.8c1.5 0 3-.5 4.1-1.4-1.4 0-2.6-1-3.1-2.3.2 0 .4.1.6.1.3 0 .6 0 .9-.1C1.8 9 .6 7.7.6 6.1c.4.2.9.4 1.5.4C1.2 5.9.7 4.9.7 3.7c0-.6.2-1.2.4-1.7 1.6 2 4 3.3 6.8 3.4-.1-.1-.1-.4-.1-.6 0-1.8 1.5-3.3 3.3-3.3.9 0 1.8.4 2.4 1 .7-.1 1.5-.4 2.1-.8-.2.8-.8 1.4-1.4 1.8.6 0 1.2-.2 1.8-.5-.4.7-1 1.3-1.6 1.7z"
                                                                />
                                                            </svg>
                                                        </a>
                                                        <a href="https://www.instagram.com/britishvogue/" title="Instagram" className="n-main__dropdown__btn-share n-main__dropdown__btn-share--instagram">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                                <title>share-instagram</title>
                                                                <path d="M8 1.44h3.23a4.43 4.43 0 0 1 1.49.28 2.48 2.48 0 0 1 .92.6 2.48 2.48 0 0 1 .6.92 4.43 4.43 0 0 1 .28 1.49v6.46a4.43 4.43 0 0 1-.28 1.49 2.65 2.65 0 0 1-1.52 1.52 4.43 4.43 0 0 1-1.49.28H4.77a4.43 4.43 0 0 1-1.49-.28 2.48 2.48 0 0 1-.92-.6 2.48 2.48 0 0 1-.6-.92 4.43 4.43 0 0 1-.28-1.49V4.73a4.43 4.43 0 0 1 .28-1.49 2.48 2.48 0 0 1 .6-.92 2.48 2.48 0 0 1 .92-.6 4.43 4.43 0 0 1 1.49-.28H8M8 0H4.7a5.87 5.87 0 0 0-1.94.42 3.92 3.92 0 0 0-1.42.92 3.92 3.92 0 0 0-.92 1.42A5.87 5.87 0 0 0 0 4.7v6.6a5.87 5.87 0 0 0 .37 1.94 3.92 3.92 0 0 0 .92 1.42 3.92 3.92 0 0 0 1.42.92A5.87 5.87 0 0 0 4.7 16h6.6a5.87 5.87 0 0 0 1.94-.37 4.09 4.09 0 0 0 2.34-2.34A5.87 5.87 0 0 0 16 11.3V4.7a5.87 5.87 0 0 0-.37-1.94 3.92 3.92 0 0 0-.92-1.42 3.92 3.92 0 0 0-1.47-.92A5.87 5.87 0 0 0 11.3 0H8zm0 3.89A4.11 4.11 0 1 0 12.11 8 4.11 4.11 0 0 0 8 3.89zm0 6.77A2.67 2.67 0 1 1 10.67 8 2.67 2.67 0 0 1 8 10.67zm4.27-7.9a1 1 0 1 0 1 1 1 1 0 0 0-1-.99z"
                                                                />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="n-main__dropdown--follow__group">
                                                        <a href="newsletters.html" className="n-main__dropdown__btn n-main__dropdown__btn--newsletter ">Newsletter Sign Up</a>
                                                    </div>
                                                </li>
                                            </ul>
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
                                    {/* <!--  follow menu desktop end --> */}
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