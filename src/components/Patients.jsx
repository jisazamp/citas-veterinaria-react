import Patient from './Patient';
import PropTypes from 'prop-types';
import Error from './Error';

const Patients = ({ patients, onPatientDelete, onPatientEdit }) => {
  return (
    <div className='patients-container'>
      <h2 className='section-description'>Listado de pacientes</h2>
      <p className='section-description'>
        Administra tus <span className='highlighted'>pacientes y citas</span>
      </p>

      {patients.length > 0 ? (
        patients.map((e) => (
          <Patient
            key={e.id}
            patient={e}
            patientDelete={onPatientDelete}
            onPatientEdit={onPatientEdit}
          />
        ))
      ) : (
        <Error message='No hay pacientes registrados' type='info' />
      )}
    </div>
  );
};

Patients.propTypes = {
  patients: PropTypes.array.isRequired,
  onPatientDelete: PropTypes.func.isRequired,
};

export default Patients;
