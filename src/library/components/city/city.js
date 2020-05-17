import React, { useState, useEffect } from 'react';
import { ComboBox } from '@core/combo-box';

const city = ({ name, value, setValue, onChange, onBlur, formField }) => {
    const [genders, setGenders] = useState([
        {
            value: null,
            text: 'Select',
        },
        {
            value: 1,
            text: 'Pune',
        },
        {
            value: 2,
            text: 'Mumbai',
        },
        {
            value: 3,
            text: 'Delhi',
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

export { city as City };
