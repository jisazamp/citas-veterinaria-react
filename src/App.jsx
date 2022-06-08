import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Patients from './components/Patients';

const App = () => {
  const [patients, setPatients] = useState([]);

  const generateId = () => {
    return Math.random().toString(36).substring(2) + Date.now();
  };

  const handlePatientSubmit = (patient) => {
    const patientId = generateId();
    patient['id'] = patientId;
    setPatients([...patients, patient]);
  };

  const handlePatientDelete = (patientId) => {
    const newPatients = patients.filter((e) => e.id !== patientId);
    setPatients(newPatients);
  };

  return (
    <>
      <Header />
      <section className='main-content'>
        <Form onPatientSubmit={handlePatientSubmit} />
        <Patients patients={patients} onPatientDelete={handlePatientDelete} />
      </section>
    </>
  );
};

export default App;
