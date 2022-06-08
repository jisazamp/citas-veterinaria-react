import Patient from './Patient';
import PropTypes from 'prop-types';

const Patients = ({ patients }) => {
  return (
    <div className='patients-container'>
      <h2 className='section-description'>Listado de pacientes</h2>
      <p className='section-description'>
        Administra tus <span className='highlighted'>pacientes y citas</span>
      </p>

      {patients.map((e, index) => (
        <Patient key={index} patient={e} />
      ))}
    </div>
  );
};

Patients.propTypes = {
  patients: PropTypes.array.isRequired,
};

export default Patients;
