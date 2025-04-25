import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/selectors.js";

export default function ContactList() {
  const filteredBook = useSelector(selectVisibleContacts);

  return (
    <ul className={css.contactList}>
      {filteredBook.map(data => (
        <li key={data.id} className={css.contact}>
          <Contact data={data} />
        </li>
      ))}
    </ul>
  );
}
