/* eslint-disable react/no-typos */
import propTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';

function Header({ title, onAdd, showAdd }) {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          onClick={onAdd}
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
        />
      )}
    </header>
  );
}
Header.PropTypes = {
  title: propTypes.string.isRequired,
};
export default Header;
