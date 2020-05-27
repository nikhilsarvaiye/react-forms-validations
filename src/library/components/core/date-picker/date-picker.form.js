import React from 'react';
import { useField, ErrorMessage } from 'formik';
import { DatePicker } from './index';

export const formDatePicker = ({ ...props }) => {
    const [field, meta, helpers] = useField(props);

    let value = null;

    const onChange = e => {
        console.log(`custom onChange clicked with value ${value}`);
        field.onChange(e);
        helpers.setValue(value);
    };

    const onBlur = e => {
        console.log('custom onBlur clicked');
        field.onBlur(e);
    };

    return (
        <React.Fragment>
            <DatePicker {...props} onChange={onChange} value={value} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
            <ErrorMessage
                name="dob"
                component="div"
                className="invalid-feedback"
            />
        </React.Fragment>
    );
};

// formInput.propTypes = {
//     name: PropTypes.string,
//     form: PropTypes.object.isRequired,
//     field: PropTypes.object.isRequired
// };
