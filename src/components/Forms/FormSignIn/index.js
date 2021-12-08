import React from "react";
import { Formik, Field, Form } from "formik";
import { SIGN_IN_SCHEMA } from "../../../Tools/schemaValidation";
import style from "./FormSignIn.module.scss";
import InputWrapper from "../InputWrapper";

const FormSignIn = () => {
  const initValue = {
    Email: "",
    Password: "",
  };

  const handlerForm = (values, formikBag) => {
    console.log(values, formikBag);
    formikBag.resetForm();
  };

  return (
    <Formik
      validationSchema={SIGN_IN_SCHEMA}
      initialValues={initValue}
      onSubmit={handlerForm}
    >
      <Form className={style.form_signin}>
        <h1>LOGIN TO YOUR ACCOUNT</h1>
        <InputWrapper name="Email" placeholder="Email addres" />
        <InputWrapper name="Password" placeholder="Password" type='password'/>
        <input type="submit" value="LOGIN" />
      </Form>
    </Formik>
  );
};

export default FormSignIn;
