import React from 'react';
import PropTypes from 'prop-types';
import { NumericTextBox } from '@progress/kendo-react-inputs';
import './number-input.scss';

const numberInput = ({
    id,
    type,
    name,
    value,
    defaultValue,
    maxLength,
    placeholder,
    onChange,
    onBlur,
    format,
    disabled,
    endIcon,
    onEndIconClick,
}) => {
    placeholder = placeholder || 'Enter number';
    return (
        <div className="number-text-box">
            <NumericTextBox
                id={id}
                type={type}
                name={name}
                value={value}
                defaultValue={defaultValue}
                maxLength={maxLength}
                onChange={onChange}
                onBlur={onBlur}
                disabled={disabled}
                placeholder={placeholder}
                format={format}
            />
            {endIcon ? (
                <span className="input-icon end" onClick={onEndIconClick}>
                    {endIcon}
                </span>
            ) : null}
        </div>
    );
};

numberInput.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.any,
    maxLength: PropTypes.number,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyUp: PropTypes.func,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    format: PropTypes.string,
};

export { numberInput as NumberInput };
