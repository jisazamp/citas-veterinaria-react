import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Patients from './components/Patients';

const App = () => {
  const initialPatients = JSON.parse(localStorage.getItem('patients')) ?? [];
  const [patients, setPatients] = useState(initialPatients);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);

  const handlePatientSubmit = (patient) => {
    if (patients.find((e) => e.id === patient.id)) {
      const updatedPatients = patients.map((patientState) =>
        patientState.id === patient.id ? patient : patientState
      );
      setPatients(updatedPatients);
      setPatient({});
      return;
    }

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
