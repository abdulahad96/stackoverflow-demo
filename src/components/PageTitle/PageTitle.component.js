import React from 'react';
import Helmet from 'react-helmet';

const PageTitle = ({ title }) => {
    let defaultTitle = 'Bountied questions - Stack Overflow';

    return (
        <Helmet>
            <title style={{color:'black'}}>{title ? title : defaultTitle}</title>
        </Helmet>
    );
};

export default PageTitle;
