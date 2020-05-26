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
    const formFieldHandlers = new FormFieldHandlers(children.props);

    const properties = {};

    const setDataProps = () => {
        if (!children.props.data) {
            properties.data = formFieldHandlers.getValues(name);
        }
    };

    setDataProps();

    return (
        <Field name={name}>
            {({ field, form, meta }) => {
                const [f, m, helpers] = useField(name);
                properties.formField = {
                    field: field,
                    form: form,
                    meta: meta,
                    helpers: helpers,
                };

                const registerOnChange = () => {
                    const existingOnChange = children.props.onChange;
                    properties.onChange = e => {
                        if (existingOnChange) {
                            existingOnChange(e);
                        }
                        field.onChange(e);
                    };
                };

                const registerOnBlur = () => {
                    const existingOnBlur = children.props.onBlur;
                    properties.onBlur = e => {
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

                children = cloneElement(children, {
                    ...props,
                    ...children.props,
                    ...field,
                    ...helpers,
                    ...properties,
                });

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
                                    {renderChildren(children)}
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

const renderChildren = children => {
    return children ? (
        typeof children === 'function' ? (
            children(children.props)
        ) : Array.isArray(children) ? (
            children.map((child, index) => {
                return renderChild(child, index);
            })
        ) : (
            renderChild(children)
        )
    ) : (
        <input type="text" {...props.field} placeholder={props.title} />
    );
};

const renderChild = (child, key) => {
    return <React.Fragment key={key}>{child}</React.Fragment>;
};

export { formField as FormField };
