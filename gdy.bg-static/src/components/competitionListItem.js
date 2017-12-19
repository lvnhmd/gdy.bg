const React = require('react');
const connect = require('react-redux').connect;
const bindActionCreators = require('redux').bindActionCreators;
const trackEntry = require('../actions/index').trackEntry;
// const Radium = require('radium');
// import SocialShare from '../components/social_share';

class CompetitionListItem extends React.Component {

    click() {
        this.props.trackEntry({
            userId: this.props.userId,
            userName: this.props.userName,
            uri: this.props.value.uri
        }, this.props.isAuthenticated);
    }

    render() {
        let comp = this.props.value;
        return (
            <li className="c-card-list__item js-c-card-list__item ">
                <article className="c-card c-card--hero">
                    <a href="gallery/the-crown-season-2.html" className="c-card__link c-card__link--article ">
                    {comp.title}</a>

                    <div className="c-card__obj">
                        <div className="c-card__obj__header">
                            <div className="c-card__images">

                                <div className="c-card__image c-card__image--picture ">
                                    {/* <picture> */}
                                        {/* <!--[if IE 9]><video style="display: none"><![endif]--> */}
                                            {/* <source media="(min-width: 600px)" 
                                            data-srcset="https://vg-images.condecdn.net/image/jzbyd6nOVMd/crop/200/square 200w, https://vg-images.condecdn.net/image/jzbyd6nOVMd/crop/300/square 300w, https://vg-images.condecdn.net/image/jzbyd6nOVMd/crop/400/square 400w, https://vg-images.condecdn.net/image/jzbyd6nOVMd/crop/600/square 600w, https://vg-images.condecdn.net/image/jzbyd6nOVMd/crop/900/square 900w, https://vg-images.condecdn.net/image/jzbyd6nOVMd/crop/1800/square 1800w"
                                            />
                                            <source media="(min-width: 0px)" 
                                            data-srcset="https://vg-images.condecdn.net/image/jzbyd6nOVMd/crop/405/landscape 405w, https://vg-images.condecdn.net/image/jzbyd6nOVMd/crop/810/landscape 810w, https://vg-images.condecdn.net/image/jzbyd6nOVMd/crop/1020/landscape 1020w, https://vg-images.condecdn.net/image/jzbyd6nOVMd/crop/1440/landscape 1440w, https://vg-images.condecdn.net/image/jzbyd6nOVMd/crop/1620/landscape 1620w"/> */}
                                            {/* <!--[if IE 9]></video><![endif]--> */}

                                            {/* <img src="static/img/tiny.gif" 
                                            data-src="https://vg-images.condecdn.net/image/jzbyd6nOVMd/crop/405/landscape" 
                                            className="global__image img-lazyload "/>
                                    </picture>
                                    <noscript>
                                        <img src="https://vg-images.condecdn.net/image/jzbyd6nOVMd/crop/405/landscape" className="global__image img-lazyload " />
                                    </noscript> */}
                                    <img src={comp.img}/>

                                </div>

                                {/* <div className="c-card__image__icon">
                                    <svg className="c-card__image__icon--gallery" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 13">
                                        <title>type-gallery</title>
                                        <path d="M16 13H3V3h13v10zM4 12h11V4H4v8zm-3-2H0V0h13v1H1v9z" />
                                    </svg>
                                </div> */}


                            </div>
                        </div>

                        <div className="c-card__obj__body">
                            <div className="c-card__header">

                                <h3 className="c-card__title">
                                    <span>{comp.title}</span>
                                </h3>


                                <hr className="c-card__separator" />
                            </div>

                            <div className="c-card__footer">

                                <p className="c-card__byline">
                                    <span className="c-card__byline-prefix">By&nbsp;</span>
                                    <span className="c-card__byline-name">{comp.source}</span>
                                </p>

                                <ul className="global__list-reset c-card__meta ">
                                    <li className="c-card__meta-item  c-card__meta-item--tag">

                                        <span className=""></span>
                                    </li>
                                    <li className="c-card__meta-item  c-card__meta-item--date">

                                        <span className="">{comp.daysToEnter} days left to enter</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>
            </li>
        );
    }
}

function mapStateToProps(state) {
    return {
        userId: state.user.id,
        userName: state.user.name,
        isAuthenticated: state.user.isAuthenticated
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ trackEntry }, dispatch);
}

// export default connect(mapStateToProps, mapDispatchToProps)(Radium(CompetitionListItem));

module.exports = connect(mapStateToProps, mapDispatchToProps)(CompetitionListItem);
