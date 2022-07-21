/* eslint-disable react/no-typos */
import propTypes from 'prop-types';
import Button from './Button';

function Header({ title, onAdd, showAdd }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        onClick={onAdd}
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
      />
    </header>
  );
}
Header.PropTypes = {
  title: propTypes.string.isRequired,
};
export default Header;
