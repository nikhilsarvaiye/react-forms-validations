import React, { useEffect, cloneElement } from 'react';
import { Formik, Form } from 'formik';
import { FormHandlers } from './form.handlers';
import './form.scss';

const form = ({ style, children, ...props }) => {
    const formHandlers = new FormHandlers(props);

    const registerOnSubmit = () => {
        const existingOnSubmit = props.onSubmit;
        props.onSubmit = (values, form) => {
            formHandlers.onSubmitting(values, form);
            if (existingOnSubmit) {
                existingOnSubmit(values, form);
            }
        };
    };

    props.initialValues = formHandlers.onInitializing(props.initialValues);

    registerOnSubmit();

    return (
        <div className="form" style={style}>
            <Formik {...props}>
                {form => {
                    props.form = form;

                    useEffect(() => {
                        formHandlers.onReady(props.initialValues, form);
                    }, []);

                    return <Form>{renderChildren(props, children)}</Form>;
                }}
            </Formik>
        </div>
    );
};

const renderChildren = (props, children) => {
    return children
        ? typeof children === 'function'
            ? children(props)
            : Array.isArray(children)
            ? children.map(child => {
                  return renderChild(props, child, 0);
              })
            : renderChild(props, children)
        : null;
};

const renderChild = (props, child, key) => {
    let cloneChild = cloneElement(child, {
        ...props,
    });
    return <React.Fragment key={key}>{cloneChild}</React.Fragment>;
};

export { form as Form };
