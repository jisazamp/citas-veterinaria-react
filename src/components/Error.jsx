import PropTypes from 'prop-types';

const Error = ({ message, type }) => {
  return <div className={type === 'danger' ? 'error' : 'info'}>{message}</div>;
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

Error.defaultProps = {
  type: 'danger',
};

export default Error;
