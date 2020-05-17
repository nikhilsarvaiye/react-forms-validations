import React, { cloneElement } from 'react';
import { Field, useField } from 'formik';
import classNames from 'classnames';
import { Label } from '@core/label';
import { FormFieldHandlers } from './form-field.handlers';
import { FormFieldError } from './form-field-error';
import './form-field.scss';

const formField = ({
    name,
    title,
    className,
    label,
    endLabel,
    required,
    children,
    onChange,
    onBlur,
    ...props
}) => {
    const formFieldHandlers = new FormFieldHandlers(props);

    const setDataProps = () => {
        if (!props.data) {
            props.data = formFieldHandlers.getValues(name);
        }
    };

    setDataProps();

    return (
        <Field name={name}>
            {({ field, form, meta }) => {
                const [f, m, helpers] = useField(name);
                props.formField = {
                    field: field,
                    form: form,
                    meta: meta,
                    helpers: helpers,
                };

                const registerOnChange = () => {
                    const existingOnChange = props.onChange;
                    props.onChange = e => {
                        if (existingOnChange) {
                            existingOnChange(e);
                        }
                        field.onChange(e);
                    };
                };

                const registerOnBlur = () => {
                    const existingOnBlur = props.onBlur;
                    props.onBlur = e => {
                        if (existingOnBlur) {
                            existingOnBlur(e);
                        }
                        field.onBlur(e);
                        formFieldHandlers.setValues(name, e.target.value);
                        setDataProps();
                    };
                };

                registerOnChange();
                registerOnBlur();

                return (
                    <React.Fragment>
                        <div
                            className={classNames(
                                'form-field' +
                                    (meta.touched && meta.error
                                        ? ' invalid'
                                        : ''),
                                className,
                            )}
                        >
                            {!endLabel ? (
                                <RenderLabel
                                    name={name}
                                    label={label}
                                    required={required}
                                />
                            ) : null}

                            <div className="form-control">
                                <div className="form-input">
                                    {renderChildren(props, children)}
                                </div>
                            </div>

                            <FormFieldError
                                name={name}
                                field={field}
                                form={form}
                                meta={meta}
                            />
                        </div>
                    </React.Fragment>
                );
            }}
        </Field>
    );
};

const RenderLabel = ({ name, label, required }) => {
    return (
        <div className="form-label">
            <Label htmlFor={name} title={label} required={required} />
        </div>
    );
};

const renderChildren = (props, children) => {
    return children ? (
        typeof children === 'function' ? (
            children(props)
        ) : Array.isArray(children) ? (
            children.map(child => {
                return renderChild(props, child, 0);
            })
        ) : (
            renderChild(props, children)
        )
    ) : (
        <input type="text" {...props.field} placeholder={props.title} />
    );
};

const renderChild = (props, child, key) => {
    let cloneChild = cloneElement(child, {
        ...props.formField.field,
        ...props.formField.helpers,
        ...props,
    });
    return <React.Fragment key={key}>{cloneChild}</React.Fragment>;
};

export { formField as FormField };
