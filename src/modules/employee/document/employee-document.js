import React from 'react';
import { EmployeeEditDocument } from './edit/employee-docuemnt-edit';

const employeeDocument = () => {
    return (
        <EmployeeEditDocument
            initialValues={{
                firstName: 'From ParentInitial First Name',
            }}
            onClear={form => {
                form.resetForm();
                alert('on clear from parent');
            }}
        />
    );
};

export { employeeDocument as EmployeeDocument };
