import { useState, useEffect } from 'react';
import Error from './Error';

import PropTypes from 'prop-types';

const Form = ({ patient, onPatientSubmit }) => {
  const [petName, setPetName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [medicalRelease, setMedicalRelease] = useState('');
  const [observations, setObservations] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length === 0) {
      setPetName('');
      setOwnerName('');
      setOwnerEmail('');
      setMedicalRelease('');
      setObservations('');

      return;
    }

    setPetName(patient.petName);
    setOwnerEmail(patient.ownerEmail);
    setOwnerName(patient.ownerName);
    setMedicalRelease(patient.medicalRelease);
    setObservations(patient.observations);
  }, [patient]);

  const generateId = () => {
    return Math.random().toString(36).substring(2) + Date.now();
  };

  const handlePatientSubmit = (e) => {
    e.preventDefault();

    if (
      [petName, ownerName, ownerEmail, medicalRelease, observations].includes(
        ''
      )
    ) {
      {
        setError(true);
        return;
      }
    }

    const patientObject = {
      petName: petName.replace(/^\w/, (c) => c.toUpperCase()),
      ownerName: ownerName.replace(/^\w/, (c) => c.toUpperCase()),
      ownerEmail: ownerEmail.toLowerCase(),
      medicalRelease,
      observations,
    };

    if (patient.id) {
      patientObject['id'] = patient.id;
    } else {
      setError(false);
      patientObject['id'] = generateId();
    }

    onPatientSubmit(patientObject);

    setPetName('');
    setOwnerName('');
    setOwnerEmail('');
    setMedicalRelease('');
    setObservations('');
  };

  return (
    <div className='form-container'>
      <h2>Seguimiento pacientes</h2>
      <p className='section-description'>
        Añade pacientes y <span className='highlighted'>adminístralos</span>
      </p>

      <form className='pets-form' onSubmit={handlePatientSubmit}>
        {error && <Error message='Todos los campos son obligatorios' />}

        <div className='pets-form__input-group'>
          <label htmlFor='petName' className='pets-form__input-label'>
            Nombre de la mascota
          </label>
          <input
            id='petName'
            name='petName'
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            className='pets-form__input-field'
            type='text'
            placeholder='Siara'
          />
        </div>

        <div className='pets-form__input-group'>
          <label htmlFor='ownerName' className='pets-form__input-label'>
            Nombre del propietario
          </label>
          <input
            id='ownerName'
            name='ownerName'
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            className='pets-form__input-field'
            type='text'
            placeholder='Juan Pablo Isaza'
          />
        </div>

        <div className='pets-form__input-group'>
          <label htmlFor='ownerEmail' className='pets-form__input-label'>
            E-mail del propietario
          </label>
          <input
            id='ownerEmail'
            name='ownerEmail'
            onChange={(e) => setOwnerEmail(e.target.value)}
            value={ownerEmail}
            className='pets-form__input-field'
            type='email'
            placeholder='juan@mail.com'
          />
        </div>

        <div className='pets-form__input-group'>
          <label htmlFor='medicalRelease' className='pets-form__input-label'>
            Alta
          </label>
          <input
            id='medicalRelease'
            name='medicalRelease'
            onChange={(e) => setMedicalRelease(e.target.value)}
            value={medicalRelease}
            className='pets-form__input-field'
            type='date'
          />
        </div>

        <div className='pets-form__input-group'>
          <label htmlFor='observations' className='pets-form__input-label'>
            Síntomas
          </label>
          <input
            value={observations}
            id='observations'
            name='observations'
            onChange={(e) => setObservations(e.target.value)}
            className='pets-form__input-field'
            type='textarea'
            placeholder='Vómito desde hace 2 días.'
          />
        </div>

        <div className='pets-form__input-group'>
          <button className='btn btn-primary' type='submit'>
            {Object.keys(patient).length === 0
              ? 'Agregar paciente'
              : 'Editar paciente'}
          </button>
        </div>
      </form>
    </div>
  );
};

Form.propTypes = {
  patient: PropTypes.object,
  onPatientSubmit: PropTypes.func.isRequired,
};

export default Form;
