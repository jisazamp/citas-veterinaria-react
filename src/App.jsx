import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Patients from './components/Patients';

const App = () => {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  const handlePatientSubmit = (patient) => {
    setPatients([...patients, patient]);
  };

  const handlePatientDelete = (p) => {
    const newPatients = patients.filter((e) => e.id !== p['id']);
    setPatients(newPatients);
    setPatient({});
  };

  const handlePatientEdit = (p) => setPatient(p);

  return (
    <>
      <Header />
      <section className='main-content'>
        <Form
          patient={patient}
          onPatientSubmit={handlePatientSubmit}
          onPatientEdit={handlePatientEdit}
        />
        <Patients
          patients={patients}
          onPatientDelete={handlePatientDelete}
          onPatientEdit={handlePatientEdit}
        />
      </section>
    </>
  );
};

export default App;
