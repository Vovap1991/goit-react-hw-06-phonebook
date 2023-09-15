import { ContactForm } from './Form/Form';
import { Application, FormTitle } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

// Зовнішня функція (передана в useState контактів) для отримання данних з local storage. Якщо там нічого немає - то рендер initial contacts
// const getInitialContacts = () => {
//   const savedContacts = localStorage.getItem('contacts');
//   if (savedContacts !== null) {
//     return JSON.parse(savedContacts);
//   }
//   return initialContacts;
// };

export const App = () => {
  // // Запис контактів у local storage
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Provider store={store}>
      <div>
        <Application>
          <div>
            <FormTitle>Phonebook</FormTitle>
            <ContactForm></ContactForm>
          </div>
          <div>
            <FormTitle>Contacts</FormTitle>
            <Filter />
            <ContactList />
          </div>
        </Application>
      </div>
    </Provider>
  );
};
