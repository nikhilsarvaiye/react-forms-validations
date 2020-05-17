import React from 'react';

const fieldError = ({ name, field, form, meta }) => {
    const getErrors = meta => {
        const errors = [];
        if (meta.touched && meta.error) {
            if (typeof meta.error == 'string') {
                errors.push({
                    name: name,
                    errorText: meta.error,
                });
            } else if (typeof meta.error == 'object') {
                for (const key in meta.error) {
                    errors.push({
                        name: key,
                        errorText: meta.error[key],
                    });
                }
            }
        }
        return errors;
    };

    const errors = getErrors(meta);

    return (
        <React.Fragment>
            {errors.length ? (
                <div className="form-error">
                    {errors.map(error => {
                        return <div className="text">{error.errorText}</div>;
                    })}
                </div>
            ) : null}
        </React.Fragment>
    );
};

export { fieldError as FormFieldError };
