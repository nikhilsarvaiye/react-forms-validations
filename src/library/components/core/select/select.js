import React from 'react';
import './select.scss';

const select = ({ name, value, onBlur, onChange, data }) => {
    console.log(data);
    return (
        <div className="custom-select">
            <select
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            >
                {data && Array.isArray(data)
                    ? data.map(item => {
                          return (
                              <option value={item.value}>{item.text}</option>
                          );
                      })
                    : null}
            </select>
        </div>
    );
};

export { select as Select };
