import React from 'react';
import * as Yup from 'yup';
import { Input } from '@core/input';
import { Button } from '@core/button';
import { Gender } from '@library/components/gender';
import { Form, FormField } from '@core/form';

export const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .label('First Name')
        .required('First Name is required'),
    lastName: Yup.string()
        .label('Last Name')
        .required('Last Name is required'),
    gender: Yup.string()
        .nullable()
        .required('Gender is required'),
});

const employeeEditDocument = ({ employee, onSubmit, onClear }) => {
    const handleSubmit = (values, { setSubmitting }) => {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 4));
        setSubmitting(false);
    };

    const handleClear = form => {
        form.resetForm();
    };

    return (
        <Form
            initialValues={employee}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ form }) => {
                return (
                    <React.Fragment>
                        <FormField name="firstName" label="First Name">
                            <Input />
                        </FormField>
                        <FormField name="lastName" label="Last Name">
                            <Input />
                        </FormField>
                        <FormField name="gender" label="Gender">
                            <Gender />
                        </FormField>
                        <Button
                            onClick={() => {
                                form.submitForm();
                            }}
                        >
                            Submit
                        </Button>
                        <Button
                            onClick={() => {
                                if (onClear) {
                                    onClear(form);
                                }
                            }}
                        >
                            Reset
                        </Button>
                    </React.Fragment>
                );
            }}
        </Form>
    );
};

export { employeeEditDocument as EmployeeEditDocument };
