/* eslint-disable react/no-typos */
import propTypes from 'prop-types';
import Button from './Button';

function Header({ title }) {
  const onClick = () => {
    console.log('click');
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onClick={onClick} color="black" text="Add" />
    </header>
  );
}
Header.PropTypes = {
  title: propTypes.string.isRequired,
};
export default Header;
