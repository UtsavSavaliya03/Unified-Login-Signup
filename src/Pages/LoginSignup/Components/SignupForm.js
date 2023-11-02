import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';

export default function SignupForm() {

    const [isLoading, setIsLoading] = useState(false);

    const initialValues = {
        firstname: '',
        lastname: '',
        email: '',
        country_name: '',
        city: '',
        mobile: '',
        userPwd: '',
        userConfirmPwd: '',
        affiliate_code: ''
    }

    const validationSchema = Yup.object().shape({
        firstname: Yup.string()
            .trim()
            .required('Required.'),
        lastname: Yup.string()
            .trim()
            .required('Required.'),
        email: Yup.string()
            .email('Invalid email address.')
            .trim()
            .required('Required.'),
        country_name: Yup.string()
            .trim()
            .required('Required.'),
        city: Yup.string()
            .trim()
            .required('Required.'),
        mobile: Yup.string()
            .trim()
            .max(10)
            .min(10)
            .required('Required.'),
        userPwd: Yup.string()
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                'Password must be alphanumeric.')
            .min(8, 'Password is too short.')
            .trim()
            .required('Required'),
        userConfirmPwd: Yup.string()
            .oneOf([Yup.ref('userPwd'), null], 'Passwords must be same')
            .min(8, 'Password is too short.')
            .trim()
            .required('Required'),
        affiliate_code: Yup.string()
            .trim()
            .required('Required.')
    })

    const handleSubmit = (values, { resetForm }) => { }

    return (
        <div className='signup-area'>
            <div className='mt-3'>
                <p className='title m-0'>Open Live Account</p>
                <p className='tag-line m-0'>Create new account with FXOpulence</p>
                <div className='devider px-5 w-75 mx-auto my-4'></div>
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    handleSubmit(values, { resetForm });
                }}
            >
                {({ errors, touched }) => (
                    <Form autoComplete='off'>
                        <div className='row m-0 p-0'>
                            <div className='col-md-6 px-0 pr-md-2'>
                                <Field name='firstname' className='w-100' placeholder='First Name' />
                                <div className='errorMsg'>
                                    <p className='m-0 text-danger pe-2'>
                                        {errors.firstname && touched.firstname ? (errors.firstname) : null}
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-6 px-0 pl-md-2'>
                                <Field name='lastname' className='w-100' placeholder='Last Name' />
                                <div className='errorMsg'>
                                    <p className='m-0 text-danger pe-2'>
                                        {errors.lastname && touched.lastname ? (errors.lastname) : null}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='row m-0 p-0'>
                            <div className='col-md-6 px-0 pr-md-2'>
                                <Field name='email' className='w-100 mt-2' placeholder='Email' />
                                <div className='errorMsg'>
                                    <p className='m-0 text-danger pe-2'>
                                        {errors.email && touched.email ? (errors.email) : null}
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-6 px-0 pl-md-2'>
                                <Field type='number' name='mobile' className='w-100 mt-2' placeholder='Phone' />
                                <div className='errorMsg'>
                                    <p className='m-0 text-danger pe-2'>
                                        {errors.mobile && touched.mobile ? (errors.mobile) : null}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='row m-0 p-0'>
                            <div className='col-md-6 px-0 pr-md-2'>
                                <Field as='select' name='country_name' className='w-100 mt-2'>
                                    <option>Country</option>
                                    <option>India</option>
                                    <option>America</option>
                                    <option>Canada</option>
                                </Field>
                                <div className='errorMsg'>
                                    <p className='m-0 text-danger pe-2'>
                                        {errors.country_name && touched.country_name ? (errors.country_name) : null}
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-6 px-0 pl-md-2'>
                                <Field name='city' className='w-100 mt-2' placeholder='City' />
                                <div className='errorMsg'>
                                    <p className='m-0 text-danger pe-2'>
                                        {errors.city && touched.city ? (errors.city) : null}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='row m-0 p-0'>
                            <div className='col-md-6 px-0 pr-md-2'>
                                <Field type='password' name='userPwd' className='w-100 mt-2' placeholder='Password' />
                                <div className='errorMsg'>
                                    <p className='m-0 text-danger pe-2'>
                                        {errors.userPwd && touched.userPwd ? (errors.userPwd) : null}
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-6 px-0 pl-md-2'>
                                <Field type='password' name='userConfirmPwd' className='w-100 mt-2' placeholder='Confirm Password' />
                                <div className='errorMsg'>
                                    <p className='m-0 text-danger pe-2'>
                                        {errors.userConfirmPwd && touched.userConfirmPwd ? (errors.userConfirmPwd) : null}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Field name='affiliate_code' className='w-100 mt-2' placeholder='Affiliate Code' />
                        <div className='errorMsg'>
                            <p className='m-0 text-danger pe-2'>
                                {errors.affiliate_code && touched.affiliate_code ? (errors.affiliate_code) : null}
                            </p>
                        </div>
                        <button disabled={isLoading} type='submit' className='btn-blue-bg py-2 w-100 mt-3 d-flex justify-content-center align-items-center'>
                            {`Create account >`}
                            {isLoading && <div className='loader ml-4'></div>}
                        </button>
                    </Form>
                )}
            </Formik>
            <div className='bg-light-capsule mt-3'>
                <p className='m-0'>We respect your privacy, Read our <span> privacy policy</span></p>
            </div>
        </div>
    )
}
