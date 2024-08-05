import React from 'react';
import PropTypes from 'prop-types';

export const Flex = ({
    className,
    alignItems ,
    justifyContent,
    onClick = () => { },
    style,
    direction,
    children,
}) => {

    const flexStyle = {
        display: 'flex',
        alignItems,
        justifyContent,
        ...style,
    };

    if (direction) {
        flexStyle.flexDirection = direction;
    }

    return (
        <div className={className} style={flexStyle} onClick={onClick}>
            {children}
        </div>
    );
};

Flex.propTypes = {
    className: PropTypes.string,
    justifyContent: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly']),
    onClick: PropTypes.func,
    style: PropTypes.object,
    direction: PropTypes.oneOf(['row', 'column', 'row-reverse', 'column-reverse']),
    children: PropTypes.node,
};

