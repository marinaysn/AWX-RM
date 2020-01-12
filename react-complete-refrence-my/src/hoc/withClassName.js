import React from 'react';

const withClassName = (WrappedContent, className) => {

    return props => (
        <div className={className}>
            <WrappedContent {...props} />
        </div>
    );
};

export default withClassName;