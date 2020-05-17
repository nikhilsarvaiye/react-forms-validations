import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './label.scss';

export const label = ({
    name,
    title,
    required,
    link,
    cssClasses,
    style,
    disabled,
    onClick,
}) => {
    cssClasses = link ? classNames('link', cssClasses) : cssClasses;

    return (
        <label
            htmlFor={name}
            disabled={disabled}
            onClick={onClick}
            className={cssClasses}
            style={style}
        >
            {title} {required ? <span>*</span> : null}
        </label>
    );
};

label.propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,
    required: PropTypes.bool,
};
