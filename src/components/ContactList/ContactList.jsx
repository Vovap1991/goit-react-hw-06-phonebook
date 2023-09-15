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
  const dispatch = useDispatch();

  if (contacts.contacts.length === 0) {
    return <NoContactsMessage>Your phonebook is empty!</NoContactsMessage>;
  }
  return (
    <List>
      {contacts.contacts.map(contact => (
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
