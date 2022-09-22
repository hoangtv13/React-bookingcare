import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { LANGUAGES } from '../../../utils';
import { changeLanguageApp } from '../../../store/actions';
import { FormattedMessage } from 'react-intl';
import * as actions from '../../../store/actions'

class OutstandingDoctor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrDoctor: []
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topDoctorsRedux !== this.props.topDoctorsRedux) {
            this.setState({
                arrDoctor: this.props.topDoctorsRedux
            })
        }
    }

    // changeLanguage = (language) => {
    //     this.props.changeLanguageAppRedux(language)
    // }
    componentDidMount() {
        this.props.loadTopDoctors()
    }
    render() {
        // console.log('check top doctor redux: ', this.props.topDoctorsRedux)
        console.log(this.props.language)
        let language = this.props.language
        let arrDoctor = this.state.arrDoctor
        //arrDoctor = arrDoctor.concat(arrDoctor).concat(arrDoctor).concat(arrDoctor).concat(arrDoctor)
        //console.log(arrDoctor)
        return (
            <React.Fragment>
                <div className=' section-share'>
                    <div className='section-container'>
                        <div className='section-header'>
                            <span className='title-section'><FormattedMessage id='homedoctor.outstandingdoctor' /></span>
                            <button className='btn-section'><FormattedMessage id='homedoctor.search' /></button>
                        </div>
                        <div className='section-body'>
                            <Slider {...this.props.settings}>
                                {arrDoctor && arrDoctor.length > 0
                                    && arrDoctor.map((item, index) => {
                                        let imageBase64 = ''
                                        if (item.image) {
                                            imageBase64 = new Buffer(item.image, 'base64').toString('binary')
                                        }
                                        let nameVi = `${item.positionData.valueVi}, ${item.lastName} ${item.firstName}`
                                        let nameEn = ''
                                        if (item.positionData.valueEn === 'None') {
                                            nameEn = `Doctor, ${item.lastName} ${item.firstName}`
                                        }
                                        else {
                                            nameEn = `${item.positionData.valueEn}, ${item.lastName} ${item.firstName}`
                                        }

                                        let nameRu = `${item.positionData.valueRu}, ${item.lastName} ${item.firstName}`
                                        return (
                                            <div className='section-customize' key={index}>
                                                <div className='customize-border'>
                                                    <div className='outer-bg'>
                                                        <div className='section-outstanding-doctor  doctor-img1 '
                                                            style={{ backgroundImage: `url(${imageBase64})` }}
                                                        ></div>
                                                    </div>
                                                    <div className='position text-center'>
                                                        <div>{language === LANGUAGES.VI ? nameVi : (language === LANGUAGES.EN ? nameEn : nameRu)}</div>
                                                        <div><FormattedMessage id='homedoctor.specialtydoctor1' /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })

                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        topDoctorsRedux: state.admin.topDoctors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTopDoctors: () => dispatch(actions.fetchTopDoctors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
