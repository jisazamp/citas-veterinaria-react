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

        <div className='pets-form__input-group'>
          <label htmlFor='ownerName' className='pets-form__input-label'>
            Nombre del propietario
          </label>
          <input
            id='ownerName'
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
            className='pets-form__input-field'
            type='date'
          />
        </div>

        <div className='pets-form__input-group'>
          <label htmlFor='observations' className='pets-form__input-label'>
            Síntomas
          </label>
          <input
            id='observations'
            className='pets-form__input-field'
            type='textarea'
            placeholder='Vómito desde hace 2 días.'
          />
        </div>

        <div className='pets-form__input-group'>
          <button className='btn btn-primary' type='submit'>
            Agregar paciente
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
