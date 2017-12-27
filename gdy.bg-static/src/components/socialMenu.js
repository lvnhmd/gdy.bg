const React = require('react');

class SocialMenu extends React.Component {

    render() {
        if (this.props.isMobile) {
            return (
                <ul className="global__list-reset">
                    <li className="n-menu__social-item">
                        <a href="https://www.facebook.com/BritishVogue/" title="Facebook" className="n-main__dropdown__btn-share n-main__dropdown__btn-share--facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                <path d="M5.9 3.1v2.2H4.3V8h1.6v8h3.3V8h2.2s.2-1.3.3-2.7H9.2V3.4c0-.3.4-.6.7-.6h1.8V0H9.3C5.8 0 5.9 2.7 5.9 3.1zm0 0" />
                            </svg>
                        </a>
                    </li>
                    <li className="n-menu__social-item">
                        <a href="http://www.twitter.com/BritishVogue" title="Twitter" className="n-main__dropdown__btn-share n-main__dropdown__btn-share--twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                <path d="M14.4 4.7v.4c0 4.3-3.3 9.3-9.3 9.3-1.9 0-3.6-.5-5-1.5h.8c1.5 0 3-.5 4.1-1.4-1.4 0-2.6-1-3.1-2.3.2 0 .4.1.6.1.3 0 .6 0 .9-.1C1.8 9 .6 7.7.6 6.1c.4.2.9.4 1.5.4C1.2 5.9.7 4.9.7 3.7c0-.6.2-1.2.4-1.7 1.6 2 4 3.3 6.8 3.4-.1-.1-.1-.4-.1-.6 0-1.8 1.5-3.3 3.3-3.3.9 0 1.8.4 2.4 1 .7-.1 1.5-.4 2.1-.8-.2.8-.8 1.4-1.4 1.8.6 0 1.2-.2 1.8-.5-.4.7-1 1.3-1.6 1.7z"
                                />
                            </svg>
                        </a>
                    </li>
                    <li className="n-menu__social-item">
                        <a href="https://www.instagram.com/britishvogue/" title="Instagram" className="n-main__dropdown__btn-share n-main__dropdown__btn-share--instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                <title>share-instagram</title>
                                <path d="M8 1.44h3.23a4.43 4.43 0 0 1 1.49.28 2.48 2.48 0 0 1 .92.6 2.48 2.48 0 0 1 .6.92 4.43 4.43 0 0 1 .28 1.49v6.46a4.43 4.43 0 0 1-.28 1.49 2.65 2.65 0 0 1-1.52 1.52 4.43 4.43 0 0 1-1.49.28H4.77a4.43 4.43 0 0 1-1.49-.28 2.48 2.48 0 0 1-.92-.6 2.48 2.48 0 0 1-.6-.92 4.43 4.43 0 0 1-.28-1.49V4.73a4.43 4.43 0 0 1 .28-1.49 2.48 2.48 0 0 1 .6-.92 2.48 2.48 0 0 1 .92-.6 4.43 4.43 0 0 1 1.49-.28H8M8 0H4.7a5.87 5.87 0 0 0-1.94.42 3.92 3.92 0 0 0-1.42.92 3.92 3.92 0 0 0-.92 1.42A5.87 5.87 0 0 0 0 4.7v6.6a5.87 5.87 0 0 0 .37 1.94 3.92 3.92 0 0 0 .92 1.42 3.92 3.92 0 0 0 1.42.92A5.87 5.87 0 0 0 4.7 16h6.6a5.87 5.87 0 0 0 1.94-.37 4.09 4.09 0 0 0 2.34-2.34A5.87 5.87 0 0 0 16 11.3V4.7a5.87 5.87 0 0 0-.37-1.94 3.92 3.92 0 0 0-.92-1.42 3.92 3.92 0 0 0-1.47-.92A5.87 5.87 0 0 0 11.3 0H8zm0 3.89A4.11 4.11 0 1 0 12.11 8 4.11 4.11 0 0 0 8 3.89zm0 6.77A2.67 2.67 0 1 1 10.67 8 2.67 2.67 0 0 1 8 10.67zm4.27-7.9a1 1 0 1 0 1 1 1 1 0 0 0-1-.99z"
                                />
                            </svg>
                        </a>
                    </li>
                </ul>
            );
        } else {
            return (
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
                </ul>)
        }
    }
}

// function mapStateToProps(state, ownProps) {

//     var name = ownProps.value.props.children[1];

//     return {
//         active: _.result(_.find(state.filters, function (f) {
//             return f.name === name;
//         }), 'active')
//     };

// }

module.exports = SocialMenu;