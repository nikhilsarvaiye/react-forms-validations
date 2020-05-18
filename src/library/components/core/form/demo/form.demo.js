import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import {
    Form,
    FormField,
    FormAction,
    FormSection,
    FormSectionLayoutType,
    FormSectionTheme,
    FormSectionAlignment,
    FormSectionBody,
    FormSectionFooter,
    FormSectionHeader,
    FormSectionHeaderTitle,
} from '@core/form';
import { Button, ButtonType, ButtonAction } from '@core/button';
import { Input } from '@core/input';
import { Gender } from '@library/components/gender';
import { City } from '@library/components/city';
import { FormConfig } from './form.config';
import { validationSchema } from './form.demo.validator';

const f = msg => {
    return <React.Fragment>{msg}</React.Fragment>;
};

const demoForm = () => {
    const [configuration, setConfiguration] = useState({
        layout: FormSectionLayoutType.Vertical,
        theme: FormSectionTheme.Default,
        numberOfRowFields: 4,
    });

    const initialState = {
        firstName: '',
        middleName: '',
        lastName: '',
        address: '',
        gender: null,
        city: null,
    };

    const [initialValues, setInitialValues] = useState(initialState);

    const handleSubmit = (values, { setSubmitting }) => {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 4));
        setSubmitting(false);
    };

    const handleClear = form => {
        form.resetForm();
        form.setValues(initialState);
    };

    return (
        <React.Fragment>
            <h1 style={{ display: 'flex', justifyContent: 'center' }}>
                React Forms
            </h1>
            <FormConfig
                configuration={configuration}
                setConfiguration={setConfiguration}
            />
            <Form
                initialValues={initialValues}
                validationSchema={validationSchema}
                queryParams={{ key: 'demo', allFields: true }}
                onSubmit={handleSubmit}
            >
                {({ form }) => {
                    return (
                        <FormSection>
                            <h1
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                Verical Forms
                            </h1>
                            <FormSection theme={configuration.theme}>
                                <FormSectionHeader>
                                    <FormSection
                                        align={FormSectionAlignment.Left}
                                    >
                                        <FormSectionHeaderTitle>
                                            Header
                                        </FormSectionHeaderTitle>
                                    </FormSection>
                                </FormSectionHeader>

                                <FormSectionBody>
                                    <FormSection
                                        layout={configuration.layout}
                                        numberOfRowFields={
                                            configuration.numberOfRowFields
                                        }
                                    >
                                        <FormField
                                            name="firstName"
                                            label="First Name"
                                        >
                                            <Input />
                                        </FormField>
                                        <FormField
                                            name="lastName"
                                            label="Last Name"
                                        >
                                            <Input />
                                        </FormField>
                                        <FormField
                                            name="middleName"
                                            label="Middle Name"
                                        >
                                            <Input />
                                        </FormField>
                                        <FormField
                                            name="address"
                                            label="Address"
                                        >
                                            <Input />
                                        </FormField>
                                        <FormField name="gender" label="Gender">
                                            <Gender />
                                        </FormField>
                                        <FormField name="city" label="City">
                                            <City />
                                        </FormField>
                                    </FormSection>
                                </FormSectionBody>

                                <FormSectionFooter>
                                    <FormSection
                                        layout={
                                            FormSectionLayoutType.Horizontal
                                        }
                                        align={FormSectionAlignment.Right}
                                        autoSpacing={true}
                                    >
                                        <FormAction>
                                            <Button
                                                startIcon={
                                                    <FontAwesomeIcon
                                                        icon={faSave}
                                                    ></FontAwesomeIcon>
                                                }
                                                type={ButtonType.Primary}
                                                action={ButtonAction.Submit}
                                                onClick={() => {
                                                    form.submitForm();
                                                }}
                                            >
                                                Submit
                                            </Button>
                                        </FormAction>
                                        <FormAction>
                                            <Button
                                                action={ButtonAction.Reset}
                                                onClick={() => {
                                                    handleClear(form);
                                                }}
                                            >
                                                Reset
                                            </Button>
                                        </FormAction>
                                    </FormSection>
                                </FormSectionFooter>
                            </FormSection>

                            <FormSection
                                theme={configuration.theme}
                                style={{ marginTop: '50px' }}
                            >
                                <h1
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    Horizantal Forms, Usage of Form Section
                                </h1>
                                <FormSection
                                    layout={FormSectionLayoutType.Horizontal}
                                >
                                    <FormSection
                                        align={FormSectionAlignment.Left}
                                        width={'50%'}
                                    >
                                        <FormSectionHeader>
                                            <FormSection
                                                align={
                                                    FormSectionAlignment.Left
                                                }
                                            >
                                                <FormSectionHeaderTitle>
                                                    Left
                                                </FormSectionHeaderTitle>
                                            </FormSection>
                                        </FormSectionHeader>

                                        <FormSectionBody>
                                            <FormSection
                                                layout={configuration.layout}
                                                numberOfRowFields={
                                                    configuration.numberOfRowFields
                                                }
                                            >
                                                <FormField
                                                    name="firstName"
                                                    label="First Name"
                                                >
                                                    <Input />
                                                </FormField>
                                                <FormField
                                                    name="lastName"
                                                    label="Last Name"
                                                >
                                                    <Input />
                                                </FormField>
                                                <FormField
                                                    name="middleName"
                                                    label="Middle Name"
                                                >
                                                    <Input />
                                                </FormField>
                                                <FormField
                                                    name="address"
                                                    label="Address"
                                                >
                                                    <Input />
                                                </FormField>
                                                <FormField
                                                    name="gender"
                                                    label="Gender"
                                                >
                                                    <Gender />
                                                </FormField>
                                                <FormField
                                                    name="city"
                                                    label="City"
                                                >
                                                    <City />
                                                </FormField>
                                            </FormSection>
                                        </FormSectionBody>
                                    </FormSection>
                                    <FormSection
                                        align={FormSectionAlignment.Right}
                                        width={'50%'}
                                    >
                                        <FormSectionHeader>
                                            <FormSection
                                                align={
                                                    FormSectionAlignment.Left
                                                }
                                            >
                                                <FormSectionHeaderTitle>
                                                    Right
                                                </FormSectionHeaderTitle>
                                            </FormSection>
                                        </FormSectionHeader>

                                        <FormSectionBody>
                                            <FormSection
                                                layout={configuration.layout}
                                                numberOfRowFields={
                                                    configuration.numberOfRowFields
                                                }
                                            >
                                                <FormField
                                                    name="firstName"
                                                    label="First Name"
                                                >
                                                    <Input />
                                                </FormField>
                                                <FormField
                                                    name="lastName"
                                                    label="Last Name"
                                                >
                                                    <Input />
                                                </FormField>
                                                <FormField
                                                    name="middleName"
                                                    label="Middle Name"
                                                >
                                                    <Input />
                                                </FormField>
                                                <FormField
                                                    name="address"
                                                    label="Address"
                                                >
                                                    <Input />
                                                </FormField>
                                                <FormField
                                                    name="gender"
                                                    label="Gender"
                                                >
                                                    <Gender />
                                                </FormField>
                                                <FormField
                                                    name="city"
                                                    label="City"
                                                >
                                                    <City />
                                                </FormField>
                                            </FormSection>
                                        </FormSectionBody>
                                    </FormSection>
                                </FormSection>
                                <FormSection>
                                    <FormSectionHeader>
                                        <FormSectionHeaderTitle>
                                            Sub Form Section
                                        </FormSectionHeaderTitle>
                                    </FormSectionHeader>
                                    <FormSectionBody>
                                        <FormSection
                                            layout={configuration.layout}
                                            numberOfRowFields={
                                                configuration.numberOfRowFields
                                            }
                                        >
                                            <FormField
                                                name="firstName"
                                                label="First Name"
                                            >
                                                <Input />
                                            </FormField>
                                            <FormField
                                                name="lastName"
                                                label="Last Name"
                                            >
                                                <Input />
                                            </FormField>
                                            <FormField
                                                name="middleName"
                                                label="Middle Name"
                                            >
                                                <Input />
                                            </FormField>
                                            <FormField
                                                name="address"
                                                label="Address"
                                            >
                                                <Input />
                                            </FormField>
                                            <FormField
                                                name="gender"
                                                label="Gender"
                                            >
                                                <Gender />
                                            </FormField>
                                            <FormField name="city" label="City">
                                                <City />
                                            </FormField>
                                        </FormSection>
                                    </FormSectionBody>
                                    <FormSectionFooter>
                                        <FormSection
                                            layout={
                                                FormSectionLayoutType.Horizontal
                                            }
                                            align={FormSectionAlignment.Right}
                                            autoSpacing={true}
                                        >
                                            <FormAction>
                                                <Button
                                                    startIcon={
                                                        <FontAwesomeIcon
                                                            icon={faSave}
                                                        ></FontAwesomeIcon>
                                                    }
                                                    type={ButtonType.Primary}
                                                    action={ButtonAction.Submit}
                                                    onClick={() => {
                                                        form.submitForm();
                                                    }}
                                                >
                                                    Submit
                                                </Button>
                                            </FormAction>
                                            <FormAction>
                                                <Button
                                                    action={ButtonAction.Reset}
                                                    onClick={() => {
                                                        handleClear(form);
                                                    }}
                                                >
                                                    Reset
                                                </Button>
                                            </FormAction>
                                        </FormSection>
                                    </FormSectionFooter>
                                </FormSection>
                            </FormSection>
                        </FormSection>
                    );
                }}
            </Form>
        </React.Fragment>
    );
};

export { demoForm as DemoForm };
