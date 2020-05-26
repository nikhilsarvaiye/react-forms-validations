import React from 'react';
import { EmployeeDocument } from './document/employee-document';

const employee = () => {
    return (
        <div>
            <EmployeeDocument />
            Employee Module
        </div>
    );
};

export { employee as Employee };
