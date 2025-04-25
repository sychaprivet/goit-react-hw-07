import { useId } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsOps.js";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      "Неправильний формат номера телефону. Введіть у форматі 123-45-67"
    )
    .min(9, "Too Short!")
    .max(9, "Too Long!")
    .required("Required"),
});
export default function ContactForm() {
  const nameFieldId = useId();
  const phoneFieldId = useId();
  const dispatch = useDispatch();

  function handleSubmit(values, actions) {
    dispatch(addContact(values));
    actions.resetForm();
  }
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.contactForm}>
        <div className={css.contact}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage
            className={css.formError}
            name="name"
            component="span"
          />
        </div>
        <div className={css.contact}>
          <label htmlFor={phoneFieldId}>Number</label>
          <Field type="tel" name="number" id={phoneFieldId} />
          <ErrorMessage
            className={css.formError}
            name="number"
            component="span"
          />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
