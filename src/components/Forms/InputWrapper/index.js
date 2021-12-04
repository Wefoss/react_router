import React from "react";
import { ErrorMessage, Field } from "formik";
import cx from "classnames";
import style from "./InputWrapper.module.scss";

const InputWrapper = ({ name, addClass, ...rest }) => {
  const propClass = cx(style[addClass], style.error)
  return (
    <label className={style.label_wrap}>
      <Field name={name}>
        {({ field, form, meta }) => {
          const classNames = cx(style.input_wrap, {
            [style.valid]: meta.touched && !meta.error,
            [style.invalid]: meta.touched && meta.error,
          });
          return <input className={classNames} {...field} {...rest} />;
        }}
      </Field>

      <ErrorMessage name={name} component="div" className={propClass} />
    </label>
  );
};

export default InputWrapper;
