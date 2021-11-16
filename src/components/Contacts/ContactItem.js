import PropTypes from 'prop-types';
import s from './Contacts.module.css';

function ContactItem({ name, number, onDelete }) {
  return (
    <li className={s.contactItem}>
      <span className={s.name}>{name}: </span>
      <span className={s.number}>{number}</span>
      <button type="button" className={s.deleteBtn} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
