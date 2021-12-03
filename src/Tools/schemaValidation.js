import * as Yup from 'yup';

const NAME_SCHEMA = Yup.string().matches(/^[a-z][A-Z]{1,16}$/, 'Must be latin letter').required()
const EMAIL_SCHEMA = Yup.string().email('Enter correct email').required()
const PASSWORD_SCHEMA = Yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$/,'Enter correct password').required()

export const SIGN_IN_SCHEMA = Yup.object({
    email:EMAIL_SCHEMA,
    password:PASSWORD_SCHEMA  
})

export const SIGN_UP_SCHEME = Yup.object({
    fname: NAME_SCHEMA,
    lname: NAME_SCHEMA,
    dname: NAME_SCHEMA,
    email: EMAIL_SCHEMA,
    password:PASSWORD_SCHEMA,
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'password does not match')
})