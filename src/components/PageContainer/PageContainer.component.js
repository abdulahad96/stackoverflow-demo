import React, { Fragment } from 'react';

const PageContainer = ({ component: Component }) => {
    return class DefaultPageContainer extends React.Component {
        render() {
            return <Fragment>
                <div className='page'>
                    <div id='content'>
                        <Component {...this.props}/>
                    </div>
                </div>
            </Fragment>
        }
    };
};

export default PageContainer;