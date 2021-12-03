import React from "react";
import { Field } from "formik";
import cx from "classnames";
import style from "./InputWrapper.module.scss";

const InputWrapper = ({ name, ...rest }) => {
  return (
    <label className={style.label_wrap}>
      <Field name={name}>
        {({ field, form, meta }) => {
          const classNames = cx(style.input_wrap, {
            [style.valid]: meta.touched && !meta.error,
            [style.invalid]: meta.touched && meta.error && meta.value,
          });
          return <input className={classNames} {...field} {...rest} />;
        }}
      </Field>
    </label>
  );
};

export default InputWrapper;
