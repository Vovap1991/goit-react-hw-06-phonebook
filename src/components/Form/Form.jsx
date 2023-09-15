import React from 'react';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  StyledForm,
  FormInput,
  FormLabel,
  FormButton,
  StyledErrorName,
  StyledErrorNumber,
} from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Required'),
  number: Yup.number().min(6).required('Required'),
});

export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        const enteredName = values.name;
        const enteredNumber = values.number;

        const isContactExists = contacts.contacts.find(
          contact =>
            contact.name.toLowerCase() === enteredName.toLowerCase() ||
            contact.number === enteredNumber
        );

        if (isContactExists) {
          return alert(`${enteredName} is already in your phonebook`);
        }
        dispatch(addContact({ id: nanoid(), ...values }));
        actions.resetForm();
      }}
    >
      <StyledForm>
        <FormLabel htmlFor="name">Name</FormLabel>
        <FormInput type="text" name="name" placeholder="Ivan Ivanenko" />
        <StyledErrorName name="name" component="div" />

        <FormLabel htmlFor="number">Number</FormLabel>
        <FormInput type="tel" name="number" placeholder="380631111111" />
        <StyledErrorNumber name="name" component="div" />
        <FormButton type="submit">Add contact</FormButton>
      </StyledForm>
    </Formik>
  );
};
