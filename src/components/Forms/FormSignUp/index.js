import React from "react";
import { Formik, Field, Form } from "formik";
import { SIGN_UP_SCHEME } from "../../../Tools/schemaValidation";
import style from "./FormSignUp.module.scss";

const FormSignUp = () => {
  const initValue = {
    firstName: "",
    lastName: "",
    displayName: "",
    email: "",
    password: "",
    confirmPass: "",
  };

  const handlerForm = (values, formikBag) => {
    console.log(values, formikBag);
    formikBag.resetForm();
  };

  return (
    <Formik
      validationSchema={SIGN_UP_SCHEME}
      initialValues={initValue}
      onSubmit={handlerForm}
    >
      <Form className={style.form_signup}>
        <div className={style.inputs_text}>
          <Field name="firstName" />
          <Field name="lastName" />
          <Field name="displayName" />
          <Field name="email" />
          <Field name="password" />
          <Field name="confirmPass" />
        </div>
        <label htmlFor="radio">
          <Field type="radio" name="radio" />
          <div><p>join to buy</p><p>join to buy join to buy join to buy join to buy</p></div>
        </label>

        <label htmlFor="radio">
          <Field type="radio" name="radio" />
          <div><p>join to buy</p><p>join to buy join to buy join to buy join to buy</p></div>
        </label>

        <input
          className={style.signup_btn}
          type="submit"
          value="Create Account"
        />
      </Form>
    </Formik>
  );
};

export default FormSignUp;
