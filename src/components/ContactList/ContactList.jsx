import { useSelector } from 'react-redux';
import { ListItem, DeleteContactButton, List } from './ContactList.styled';

export const ContactList = ({ onDelete }) => {
  const contacts = useSelector(state => state.contacts);
  return (
    <List>
      {contacts.contacts.map(contact => (
        <ListItem key={contact.id}>
          {contact.name}:{''} {contact.number}
          <DeleteContactButton
            onClick={() => {
              onDelete(contact.id);
            }}
          >
            Delete
          </DeleteContactButton>
        </ListItem>
      ))}
    </List>
  );
};
