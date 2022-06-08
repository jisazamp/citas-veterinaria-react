import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Patients from './components/Patients';

const App = () => {
  const [patients, setPatients] = useState([]);

  const handlePatientSubmit = (patient) => {
    setPatients([...patients, patient]);
  };

  return (
    <>
      <Header />
      <section className='main-content'>
        <Form onPatientSubmit={handlePatientSubmit} />
        <Patients patients={patients} />
      </section>
    </>
  );
};

export default App;
