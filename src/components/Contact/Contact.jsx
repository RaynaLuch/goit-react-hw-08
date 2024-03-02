import { FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const onDelete = (id) => dispatch(deleteContact(id));
  return (
    <div>
      <p>
        <FaUserAlt /> {contact.name}
      </p>
      <p>
        <FaPhone /> {contact.phone}
      </p>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </div>
  );
};
