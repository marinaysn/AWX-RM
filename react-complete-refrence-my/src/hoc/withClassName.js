import React from 'react';

const withClassName = (WrappedContent, className) => {

    return props => (
        <div className={className}>
            <WrappedContent />
        </div>
    );

};

export default withClassName;