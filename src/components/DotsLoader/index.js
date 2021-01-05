import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import PropTypes from "prop-types";


import './styles.css'

class DotsLoader extends Component {
    static propTypes = {
        isloading: PropTypes.bool
    };

    static defaultProps = {
        isloading: false
    };

    render() {
        const { isloading } = this.props;
        return (
            <div  className="loader" style={{ display: isloading ? 'flex' : 'none' }}>
                <Loader
                    visible={isloading}
                    type="ThreeDots"
                    color="#fff"
                    height={100}
                    width={100}
                />
            </div>
        );
    }
}

export default DotsLoader