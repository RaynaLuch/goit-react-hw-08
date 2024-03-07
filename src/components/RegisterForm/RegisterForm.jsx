import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegisterForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short")
    .max(50, "Too long")
    .required("This is a required field"),
  email: Yup.string().required("This is a required field"),
  password: Yup.string()
    .min(8, "Too short")
    .max(50, "Too long")
    .required("This is a required field"),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register({ ...values }));
    actions.resetForm();
  };

  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={userSchema}
    >
      <Form className={css.form} autoComplete="off">
        <label htmlFor={nameFieldId} className={css.label}>
          Username
        </label>
        <Field type="text" name="name" id={nameFieldId} />
        <ErrorMessage className={css.error} name="name" component="span" />
        <label htmlFor={emailFieldId} className={css.label}>
          Email
        </label>
        <Field type="email" name="email" id={emailFieldId} />
        <ErrorMessage className={css.error} name="email" component="span" />
        <label htmlFor={passwordFieldId} className={css.label}>
          Password
        </label>
        <Field type="password" name="password" id={passwordFieldId} />
        <ErrorMessage className={css.error} name="password" component="span" />
        <button type="submit" className={css.button}>
          Register
        </button>
      </Form>
    </Formik>
  );
};
