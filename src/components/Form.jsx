const Form = () => {
  return (
    <div className='form-container'>
      <h2>Seguimiento pacientes</h2>
      <p className='section-description'>
        Añade pacientes y <span className='highlighted'>adminístralos</span>
      </p>

      <form className='pets-form'>
        <div className='pets-form__input-group'>
          <label htmlFor='petName' className='pets-form__input-label'>
            Nombre de la mascota
          </label>
          <input
            id='petName'
            className='pets-form__input-field'
            type='text'
            placeholder='Siara'
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
