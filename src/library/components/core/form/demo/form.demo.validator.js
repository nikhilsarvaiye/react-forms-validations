import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .label('First Name')
        .required('First Name is required'),
    middleName: Yup.string().nullable().label('Middle Name'),
    lastName: Yup.string()
        .label('Last Name')
        .required('Last Name is required'),
    address: Yup.string().nullable(),
    gender: Yup.string().nullable().required('Gender is required'),
    city: Yup.string().nullable(),
});
