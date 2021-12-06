import * as Yup from 'yup';

export const NAME_SCHEMA = Yup.string().matches(/^[A-Z][a-z]{1,16}$/, 'Must be latin letter').required()
export const EMAIL_SCHEMA = Yup.string().email('Enter correct email').required()
export const PASSWORD_SCHEMA = Yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$/,'Enter correct password').required()

export const SIGN_IN_SCHEMA = Yup.object({
    Email:EMAIL_SCHEMA,
    Password:PASSWORD_SCHEMA  
})

export const SIGN_UP_SCHEME = Yup.object({
    'First Name': NAME_SCHEMA,
    'Last Name': NAME_SCHEMA,
    'Display Name': NAME_SCHEMA,
    Email: EMAIL_SCHEMA,
    Password:PASSWORD_SCHEMA,
    'Password Confirmation': Yup.string().oneOf([Yup.ref('password')], 'password does not match').required()
})