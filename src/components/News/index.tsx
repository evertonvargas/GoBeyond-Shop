import { useFormik } from 'formik'
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
      onSubmit: (values, form) => {
        console.log("Cadastro ok")
      },
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
          <div>
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
            {touched.username && errors.username ? (
              <span>{errors.username}</span>
            ) : null}
          </div>
          
          <div>
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
            {touched.email && errors.email ? (
              <span>{errors.email}</span>
            ) : null}
          </div>
          <button type="submit" onClick={() => handleSubmit()}>
            Eu quero
          </button>
        </form>
      </div>
    </div>
  );
}
