import s from './Filter.module.css';
import PropTypes from 'prop-types';

function Filter({ value, onChange }) {
  return (
    <label className={s.label}>
      <p>Find contacts by name:</p>
      <input
        type="text"
        value={value.trim()}
        className={s.input}
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
