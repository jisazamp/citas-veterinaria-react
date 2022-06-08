import PropTypes from 'prop-types';

const Patient = ({ patient, patientDelete, patientEdit }) => {
  const { petName, ownerName, ownerEmail, medicalRelease, observations } =
    patient;

  return (
    <article className='patient-card'>
      <div className='patient-card__icons'>
        <svg
          onClick={() => patientEdit(patient.id)}
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          className='patient-card__icon'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
          />
        </svg>

        <svg
          onClick={() => patientDelete(patient)}
          xmlns='http://www.w3.org/2000/svg'
          className='patient-card__icon'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
          />
        </svg>
      </div>
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

      <p>
        <span className='highlighted uppercase'>Observaciones:</span>{' '}
        {observations}
      </p>
    </article>
  );
};

Patient.propTypes = {
  patient: PropTypes.object.isRequired,
};

export default Patient;
