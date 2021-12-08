import * as Yup from 'yup';

export const NAME_SCHEMA = Yup.string().matches(/^[A-Z][a-z]{1,16}$/, 'Must be latin letter').required()
export const EMAIL_SCHEMA = Yup.string().email('Enter correct email').required()
export const PASSWORD_SCHEMA = Yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$/,'Enter correct password').required()

export const SIGN_IN_SCHEMA = Yup.object({
    Email:EMAIL_SCHEMA,
    Password:PASSWORD_SCHEMA  
})

export const SIGN_UP_SCHEME = Yup.object({
    firstName: NAME_SCHEMA.required('First Name is required'),
    lastName: NAME_SCHEMA.required('Last Name is required'),
    displayName: NAME_SCHEMA.required('Display Name is required'),
    email: EMAIL_SCHEMA.required('Email is required'),
    password:PASSWORD_SCHEMA.required('Password is required'),
    passwordConfirm: Yup.string().oneOf([Yup.ref('password')], 'Password does not match').required('Password Confirmation is a required fild')
})