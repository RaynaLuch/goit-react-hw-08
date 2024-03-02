import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import { getContacts, getFilter } from "../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  window.localStorage.setItem("saved-contacts", JSON.stringify(contacts.items));
  const filter = useSelector(getFilter);
  const filteredContacts = contacts.items.filter(
    (contact) =>
      !filter || contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  let contactlist = filteredContacts.map(function (contact) {
    return (
      <li key={contact.id} className={css.listItem}>
        <Contact contact={contact} />
      </li>
    );
  });
  return <ul className={css.list}>{contactlist}</ul>;
};
