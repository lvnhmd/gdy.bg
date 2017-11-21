import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSources, toggleSource } from '../actions/index';
import SourceListItem from '../components/source_list_item';

class SourceList extends Component {

    componentDidMount() {
        this.props.fetchSources();
    }

    renderList() {
        return this.props.sources.map((source) => {
            return (
                <SourceListItem key={source.name} value={
                    <a onClick={() => this.props.toggleSource(source)}> {source.name}</a>} />
            );
        });
    }

    render() {
        return (

            // <div id="navigation" className="row">
            //     <nav className="primary">
            //         <ul id="nav" className="desktop-12">
            //             {this.renderList()}
            //         </ul>
            //     </nav>
            // </div>

            <div className="n-main__sticker">
                <div className="n-main__sticker-child">

                    <nav className="n-main__nav">
                        <ul className="global__list-reset n-main__list n-visibility--desktop">
                            {this.renderList()}
                        </ul>


                        {/* <div className="n-main__nav-group n-main__nav-group--left">
                            <div className="n-main__nav-logo is-hidden">
                                <a href="index.html" title="Vogue" className="">
                                    <svg id="vogue-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 351.58 90.02">
                                        <title>vogue-logo</title>
                                        <path id="british_vogue" data-name="british vogue" d="M288.27,88.17a2.27,2.27,0,0,1-.1-0.41c0-.2.1-0.3,0.1-0.51h6.32c0.71,0,1-.2,1-0.51V3.89a0.75,0.75,0,0,0-.91-0.54l-0.09,0h-14c-0.61-.1-0.92.1-0.92,0.51V66.56c0.1,7.95-2.65,14.06-7.85,18.24A24.64,24.64,0,0,1,256.68,90h-0.1c-21.3.1-31.89-9-31.89-27.21V4.5a1.26,1.26,0,0,0-1.63-1.12h-6.73a0.49,0.49,0,0,1-.1-0.51,0.62,0.62,0,0,1,.1-0.41h31.59a1.09,1.09,0,0,1,0,.92H241.2c-1.43-.1-2,0.31-2,1.22V70.94q0,7.8,4.28,12.84c3.16,3.57,7.54,5.4,13.14,5.3a24.05,24.05,0,0,0,14.67-5c5.09-4.08,7.64-10,7.54-17.53V3.89c0-.41-0.31-0.51-0.92-0.51h-8.76a0.56,0.56,0,0,1-.2-0.51,1.41,1.41,0,0,1,.2-0.41h80.4V33.55a0.51,0.51,0,0,1-.61,0,35,35,0,0,0-3.16-15.18q-6.72-15-24.15-15H311.2c-0.71-.1-1,0.1-1,0.51V42.72c0,0.41.3,0.61,1,.61h3.46c6.83-.1,11.51-2.85,13.76-8.46a17.46,17.46,0,0,0,1.43-8.46,0.49,0.49,0,0,1,.41-0.1c0.1,0,.2.1,0.31,0.1V61.47a0.2,0.2,0,0,1-.4,0A23.06,23.06,0,0,0,328,52.7c-2.75-5.71-7.34-8.56-13.76-8.46h-3c-0.71-.1-1,0.1-1,0.51V86.53c0,0.31.3,0.51,1,.61h10c12.53,0,21.2-5.3,26.09-16a38.81,38.81,0,0,0,3.46-16.3,0.86,0.86,0,0,1,.82,0V88.17h-63.3ZM74.69,3.39H68.58A3,3,0,0,0,67,3.7a1.68,1.68,0,0,0-.41,1.12C66.44,5,57.47,33,39.64,88.57L39.33,88Q33.07,69.62,20.48,36C13.25,16.43,9.48,6,9.07,4.81a2.14,2.14,0,0,0-.61-1.22,0.88,0.88,0,0,0-.81-0.2H0.2A0.41,0.41,0,0,1,0,3,0.56,0.56,0,0,1,.2,2.47H31.08a1.4,1.4,0,0,1,.2.41,1.08,1.08,0,0,1-.2.51H24.76c-1.22-.1-1.63.2-1.32,0.92,0.1,0.1,7.34,20,21.91,59.61a1.66,1.66,0,0,0,.71,1.22Q65.32,5.37,65.42,5.32L65.73,4.2a0.68,0.68,0,0,0-.53-0.8H58.08a1.09,1.09,0,0,1,0-.92H74.69a1.09,1.09,0,0,1,0,.92h0Zm61.55,58.9a48.64,48.64,0,0,1-8.66,14.27,42.62,42.62,0,0,1-12,9.58A29.42,29.42,0,0,1,102,89.59,30.34,30.34,0,0,1,87.94,86a37.74,37.74,0,0,1-11.82-9.58,46.42,46.42,0,0,1-8-14.16A50.16,50.16,0,0,1,65,44.86,49.11,49.11,0,0,1,76.53,13.68,38.48,38.48,0,0,1,88.55,4,27.46,27.46,0,0,1,102.31.43,30,30,0,0,1,116,3.79a37.41,37.41,0,0,1,12,9.27c7.85,8.66,11.72,19.36,11.62,31.79a46.12,46.12,0,0,1-3.36,17.42h0Zm-16.3-48.1Q114.74,1,102.2,1C87.84,1,81.63,15.61,81.63,44.45c0,14.78.19,25.27,2.64,31.59,3.16,8.56,9.17,12.84,18.14,12.84,8.25,0,14.16-4.38,17.53-13.25q4-10.4,4.08-31.18c-0.1-13.35-1.43-23.54-4.08-30.26h0ZM197.79,52.7h-7a0.53,0.53,0,0,1-.2-0.41,0.77,0.77,0,0,1,.2-0.41h30.06c0,0.1.1,0.31,0.1,0.41a4.51,4.51,0,0,1-.1.51h-6.62c-0.61-.1-0.92.1-0.92,0.51V88.06c0,0.31-.2.41-0.41,0.2-0.2-1.43-1.22-2.75-3-4-2.14-1.43-4.89-1.63-8-.61A46.54,46.54,0,0,0,195,86.2l-4.48,1.94a22.55,22.55,0,0,1-9.78,1.43,27.43,27.43,0,0,1-12.84-3.77A36,36,0,0,1,157,76.45Q146.79,63.3,146.94,45.27a50.42,50.42,0,0,1,3.36-17.53,52.58,52.58,0,0,1,8.36-14.47,38.68,38.68,0,0,1,11.11-9.88c4.07-2.39,8-3.57,11.81-3.39a23.4,23.4,0,0,1,8.05,1.53l6.11,2.24a10.43,10.43,0,0,0,5.4.61A12.28,12.28,0,0,0,206.86.84a1.22,1.22,0,0,1,.51-0.51c0.2-.31.41-0.31,0.51-0.1l-0.1,30.26c0,0.31-.2.41-0.61,0.2l-1.32-5a52.23,52.23,0,0,0-3.87-10C197,6.14,190.55,1.14,182.4.84c-7.44-.41-12.84,3.77-16,12.63-2.65,7.24-3.87,17.53-3.77,31.18q0.3,42.19,16.61,44a24.45,24.45,0,0,0,11.62-1.53q8.25-3.67,8.25-13.66V53.21c0-.41-0.41-0.51-1.33-0.51h0Z"
                                            transform="translate(0.01 0.02)" />
                                    </svg>
                                </a>
                            </div>
                        </div> */}

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
                                                        <path d="M5.9 3.1v2.2H4.3V8h1.6v8h3.3V8h2.2s.2-1.3.3-2.7H9.2V3.4c0-.3.4-.6.7-.6h1.8V0H9.3C5.8 0 5.9 2.7 5.9 3.1zm0 0"
                                                        />
                                                    </svg>
                                                </a>
                                                <a href="http://www.twitter.com/BritishVogue" title="Twitter" className="n-main__dropdown__btn-share n-main__dropdown__btn-share--twitter">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                        <path d="M14.4 4.7v.4c0 4.3-3.3 9.3-9.3 9.3-1.9 0-3.6-.5-5-1.5h.8c1.5 0 3-.5 4.1-1.4-1.4 0-2.6-1-3.1-2.3.2 0 .4.1.6.1.3 0 .6 0 .9-.1C1.8 9 .6 7.7.6 6.1c.4.2.9.4 1.5.4C1.2 5.9.7 4.9.7 3.7c0-.6.2-1.2.4-1.7 1.6 2 4 3.3 6.8 3.4-.1-.1-.1-.4-.1-.6 0-1.8 1.5-3.3 3.3-3.3.9 0 1.8.4 2.4 1 .7-.1 1.5-.4 2.1-.8-.2.8-.8 1.4-1.4 1.8.6 0 1.2-.2 1.8-.5-.4.7-1 1.3-1.6 1.7z"
                                                        />
                                                    </svg>
                                                </a>
                                                <a href="https://www.youtube.com/user/vogue" title="Youtube" className="n-main__dropdown__btn-share n-main__dropdown__btn-share--youtube">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                        <path d="M6.3 10.1V5.6l4.3 2.3-4.3 2.2zm9.5-5.3s-.2-1.1-.6-1.6c-.6-.6-1.3-.6-1.6-.7-2.2-.1-5.6-.1-5.6-.1s-3.4 0-5.6.2c-.3 0-1 0-1.6.7-.5.4-.6 1.5-.6 1.5S0 6.1 0 7.4v1.2c0 1.3.2 2.6.2 2.6s.2 1.1.6 1.6c.6.6 1.4.6 1.8.7 1.2.1 5.4.1 5.4.1s3.4 0 5.6-.2c.3 0 1 0 1.6-.7.5-.5.6-1.6.6-1.6s.2-1.2.2-2.5V7.4c0-1.3-.2-2.6-.2-2.6"
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
                        </div>
                    </nav>

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { sources: state.sources };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchSources, toggleSource }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SourceList);

