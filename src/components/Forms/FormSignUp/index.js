import React from "react";
import { Formik, Field, Form } from "formik";
import { SIGN_UP_SCHEME } from "../../../Tools/schemaValidation";
import style from "./FormSignUp.module.scss";
import InputWrapper from "../InputWrapper";

const FormSignUp = () => {
  const initValue = {
    fname: "",
    lname: "",
    dname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handlerForm = (values, formikBag) => {
    console.log(values, formikBag);
    formikBag.resetForm();
  };

  return (
    <>
      <Formik
        validationSchema={SIGN_UP_SCHEME}
        initialValues={initValue}
        onSubmit={handlerForm}
      >
        <Form className={style.form_signup}>
          <div className={style.title}>
            <h1>CREATE AN ACCOUNT</h1>
            <p>We always keep your name and email address private.</p>
          </div>
          <div className={style.inputs_text}>
            <InputWrapper
              name="fname"
              addClass="errorSize"
              placeholder="First Name"
            />
            <InputWrapper
              name="lname"
              addClass="errorSize"
              placeholder="Last Name"
            />
            <InputWrapper
              name="dname"
              addClass="errorSize"
              placeholder="Display Name"
            />
            <InputWrapper
              name="email"
              addClass="errorSize"
              placeholder="Email Addres"
            />
            <InputWrapper
              name="password"
              addClass="errorSize"
              placeholder="Password"
            />
            <InputWrapper
              name="confirmPassword"
              addClass="errorSize"
              placeholder="Password Confirmation"
            />
          </div>

          <label className={style.signup_label} htmlFor="radio">
            <Field type="radio" name="radio" />
            <div>
              <h3>Join As a Buyer</h3>
              <p className={style.radio_info}>
                I am looking for a Name, Logo or Tagline for my business, brand
                or product.
              </p>
            </div>
          </label>

          <label className={style.signup_label} htmlFor="radio">
            <Field type="radio" name="radio" />
            <div>
              <h3>Join As a Creative or Marketplace Seller</h3>
              <p className={style.radio_info}>
                I plan to submit name ideas, Logo designs or sell names in
                Domain Marketplace
              </p>
            </div>
          </label>

          <label className={style.checbox_label}>
            <input className={style.checbox} type="checkbox" style={{ display: "inline-block" }} />
            <p
              className={style.radio_info}
              style={{ verticalAlign: "text-top", marginLeft: "10px" }}
            >
              Allow Squadhelp to send marketing/promotional offers from time to
              time
            </p>
          </label>

          <input
            className={style.signup_btn}
            type="submit"
            value="Create account"
          />
        </Form>
      </Formik>
    </>
  );
};

export default FormSignUp;
