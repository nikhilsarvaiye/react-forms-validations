import React, { useState, useEffect } from 'react';
import { ComboBox } from '@core/combo-box';

const gender = ({ name, value, setValue, onChange, onBlur, formField }) => {
    const [genders, setGenders] = useState([
        {
            value: null,
            text: 'Select',
        },
        {
            value: 1,
            text: 'Male [M]',
        },
        {
            value: 2,
            text: 'Female [F]',
        },
        {
            value: 3,
            text: 'Unknown [U]',
        },
    ]);

    function initialize() {
        setValue(value);
    }

    useEffect(() => {
        initialize();
    }, []);

    return (
        <ComboBox
            name={name}
            value={value}
            setValue={setValue}
            textField="text"
            valueField="value"
            data={genders}
            onChange={onChange}
            onBlur={onBlur}
        />
    );
};

export { gender as Gender };
