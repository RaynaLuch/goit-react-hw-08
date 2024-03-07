import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContactList } from "../components/ContactList/ContactList";
import { SearchBox } from "../components/SearchBox/SearchBox";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { selectError, selectIsLoading } from "../redux/selectors";
import { fetchContacts } from "../redux/operations";

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <b>Loading</b>}
      <ContactList />
    </div>
  );
}
