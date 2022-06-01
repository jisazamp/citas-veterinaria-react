import Patient from './Patient';

const Patients = () => {
  return (
    <div className='patients-container'>
      <h2 className='section-description'>Listado de pacientes</h2>
      <p className='section-description'>
        Administra tus <span className='highlighted'>pacientes y citas</span>
      </p>

      <Patient />
    </div>
  );
};

export default Patients;
