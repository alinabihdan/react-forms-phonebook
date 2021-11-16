import s from './Contacts.module.css';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

function Contacts({ contacts, onDeleteContact }) {
  return (
    <ul className={s.contacts}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          name={name}
          number={number}
          key={id}
          onDelete={() => {
            onDeleteContact(id);
          }}
        />
      ))}
    </ul>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array,
};

export default Contacts;
