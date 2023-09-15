import { useDispatch, useSelector } from 'react-redux';
import {
  ListItem,
  DeleteContactButton,
  List,
  NoContactsMessage,
} from './ContactList.styled';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const visibleContacts = contacts.contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.filter.toLowerCase())
  );

  if (visibleContacts.length === 0) {
    return (
      <NoContactsMessage>
        Sorry! No contacts in your phonebook!
      </NoContactsMessage>
    );
  }
  return (
    <List>
      {visibleContacts.map(contact => (
        <ListItem key={contact.id}>
          {contact.name}:{''} {contact.number}
          <DeleteContactButton
            onClick={() => {
              dispatch(deleteContact(contact.id));
            }}
          >
            Delete
          </DeleteContactButton>
        </ListItem>
      ))}
    </List>
  );
};
