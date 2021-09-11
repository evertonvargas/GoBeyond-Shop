import { useFormik } from "Formik";
import * as yup from "yup";

import styles from "./styles.module.scss";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("E-mail inválido")
    .required("Preenchimento Obrigatório"),
  username: yup.string().required("Preechimento obrigatório"),
});

export function News() {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      onSubmit: (values, form) => {},
      validationSchema,
      initialValues: {
        email: "",
        username: "",
      },
    });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Participe de nossas news com promoções e novidades!</h2>
        <form>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Digite seu nome"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              touched.username && errors.username && styles.borderError
            }
          />
          

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu e-mail"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={touched.email && errors.email && styles.borderError}
          />
          <button type="submit" onClick={() => handleSubmit()}>
            Eu quero
          </button>
        </form>
        <div>
        {touched.username && errors.username ? (
            <span className={styles.error}>{errors.username}</span>
          ) : null}
          {touched.email && errors.email ? (
            <span className={styles.error}>{errors.email}</span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
