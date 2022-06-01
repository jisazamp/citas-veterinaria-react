import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Patients from './components/Patients';

const App = () => {
  return (
    <>
      <Header />
      <section className='main-content'>
        <Form />
        <Patients />
      </section>
    </>
  );
};

export default App;
