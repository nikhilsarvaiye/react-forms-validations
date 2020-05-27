import React, { useState } from 'react';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import { DateCalendar } from './date-calendar';
import { ToggleButton } from '@progress/kendo-react-dateinputs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './date-picker.scss';

export const datePicker = ({ name, onChange, value, onBlur }) => {
    return (
        <span className="date-picker">
            <DatePicker
                calendar={DateCalendar}
                formatPlaceholder={{ year: 'YYYY', month: 'MM', day: 'DD' }}
                format={'MM/dd/yyyy'}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                name={name}
                toggleButton={CustomToggleButton}
            />
        </span>
    );
};

const CustomToggleButton = ({ ...props }) => {
    return (
        <ToggleButton {...props}>
            <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
        </ToggleButton>
    );
};

const Popup = ({ ...props }) => {
    return (
        <Popup
            {...props}
            anchorAlign={{
                horizontal: 'center',
                vertical: 'bottom',
            }}
            popupAlign={{
                horizontal: 'center',
                vertical: 'top',
            }}
        />
    );
};
