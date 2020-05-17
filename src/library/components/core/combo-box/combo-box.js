import React, { useState, useEffect } from 'react';
import { ComboBox } from '@progress/kendo-react-dropdowns';
import './combo-box.scss';

const comboBox = ({
    name,
    value,
    setValue,
    data,
    textField,
    valueField,
    dataItemKey,
    onChange,
    onBlur,
    placeholder,
    allowCustom,
}) => {
    const [controlValue, setControlValue] = useState();

    const handleValueChange = () => {
        if (valueField) {
            const item = (data || []).find(x => x[valueField] == value);
            if (item) {
                setControlValue(item);
            }
        } else {
            setControlValue(value);
        }
    };

    const handleChange = event => {
        if (valueField) {
            setControlValue(event.target.value);
            setValue(event.target.value[valueField]);
            if (onChange) {
                onChange(
                    updateEventValue(event, event.target.value[valueField]),
                );
            }
        } else {
            setValue(event.target.value);
            if (onChange) {
                onChange(event);
            }
        }
    };

    const updateEventValue = (event, value) => {
        return {
            ...event,
            target: {
                ...event.target,
                value: value,
            },
            value: value,
        };
    };

    useEffect(() => {
        handleValueChange();
    }, [value, data]);

    return (
        <div className="combo-box">
            <ComboBox
                name={name}
                data={data}
                textField={textField}
                dataItemKey={dataItemKey}
                value={valueField ? controlValue : value}
                onChange={handleChange}
                onBlur={onBlur}
                allowCustom={allowCustom}
                placeholder={placeholder}
            />
        </div>
    );
};

export { comboBox as ComboBox };
