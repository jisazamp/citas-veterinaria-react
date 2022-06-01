const Patient = () => {
  return (
    <article className='patient-card'>
      <p>
        <span className='highlighted uppercase'>Nombre:</span> Bambino
      </p>

      <p>
        <span className='highlighted uppercase'>Propietario:</span> Juan P.
        Isaza
      </p>

      <p>
        <span className='highlighted uppercase'>Email propietario:</span>{' '}
        juan@mail.com
      </p>

      <p>
        <span className='highlighted uppercase'>Fecha de alta:</span> 10 de
        diciembre de 2021
      </p>
    </article>
  );
};

export default Patient;
