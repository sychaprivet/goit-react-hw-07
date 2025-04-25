import { MdDelete, MdPerson, MdPhone } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps.js";

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <div>
        <p>
          <MdPerson />
          {name}
        </p>
        <p>
          <MdPhone /> {number}
        </p>
      </div>
      <button onClick={handleDelete}>
        <MdDelete /> Delete
      </button>
    </>
  );
}
