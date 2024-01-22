import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../form/form.css';

function Form() {
    const validationSchema = Yup.object({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required')
            .matches(
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                'Invalid email address'
            ),
        password: Yup.string()
            .required('Password is required')
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
                'Must contain at least 8 characters, one letter, and one number'
            ),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('Form submitted:', values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="formMain">
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className='input'
                {...formik.getFieldProps('firstName')}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
                <div className="error">{formik.errors.firstName}</div>
            ) : null}

            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className='input'
                {...formik.getFieldProps('lastName')}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
                <div className="error">{formik.errors.lastName}</div>
            ) : null}

            <input
                type="email"
                name="email"
                placeholder="Mail Id"
                className='input'
                {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
            ) : null}

            <input
                type="password"
                name="password"
                placeholder="Password"
                className='input'
                {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
            ) : null}

            <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className='input'
                {...formik.getFieldProps('confirmPassword')}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                <div className="error">{formik.errors.confirmPassword}</div>
            ) : null}

            <div className='submit' type="submit" onClick={formik.handleSubmit}>
                Submit
            </div>
        </form>
    );
}

export default Form;
