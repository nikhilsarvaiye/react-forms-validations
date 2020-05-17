import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import './input.scss';

export const input = ({
    id,
    type,
    name,
    value,
    maxLength,
    placeholder,
    onChange,
    onBlur,
    disabled,
    endIcon,
    onEndIconClick,
}) => {
    placeholder = placeholder || 'Enter text';
    return (
        <div className="text-box">
            <Input
                id={id}
                type={type}
                name={name}
                value={value}
                maxLength={maxLength}
                onChange={onChange}
                onBlur={onBlur}
                disabled={disabled}
                placeholder={placeholder}
                autoComplete="off"
            />
            {endIcon ? (
                <span className="input-icon end" onClick={onEndIconClick}>
                    {endIcon}
                </span>
            ) : null}
        </div>
    );
};

input.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.any,
    maxLength: PropTypes.number,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
};
