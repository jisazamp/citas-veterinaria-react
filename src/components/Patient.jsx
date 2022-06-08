import PropTypes from 'prop-types';

const Patient = ({ patient }) => {
  const { petName, ownerName, ownerEmail, medicalRelease } = patient;

  return (
    <article className='patient-card'>
      <p>
        <span className='highlighted uppercase'>Nombre:</span> {petName}
      </p>

      <p>
        <span className='highlighted uppercase'>Propietario:</span> {ownerName}
      </p>

      <p>
        <span className='highlighted uppercase'>Email propietario:</span>{' '}
        {ownerEmail}
      </p>

      <p>
        <span className='highlighted uppercase'>Fecha de alta:</span>{' '}
        {medicalRelease}
      </p>
    </article>
  );
};

Patient.propTypes = {
  patient: PropTypes.object.isRequired,
};

export default Patient;
