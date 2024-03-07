import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

const userSchema = Yup.object().shape({
  email: Yup.string().required("This is a required field"),
  password: Yup.string().required("This is a required field"),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn({ ...values }))
      .unwrap()
      .then(() => {
        console.log("login success");
      })
      .catch(() => {
        console.log("login error");
      });

    actions.resetForm();
  };

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
          Log In
        </button>
      </Form>
    </Formik>
  );
};
