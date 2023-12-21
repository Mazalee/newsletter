import React, { useEffect, useState } from 'react'
import Success from './Success';
import DefaultModal from './DefaultModal';

const Content = () => {

  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    if(!emailRegex.test(email)) {
      setErrorMessage(true);
      console.log("wrong email address");
      return;
    }
    setErrorMessage(false);
    setSubmitSuccess(true);
    // setShowModal2(true);
  }


  return (
    <main>
      {!submitSuccess && (
        <DefaultModal 
          errorMessage={errorMessage} 
          handleSubmit={handleSubmit} 
          setEmail={setEmail}
          email={email}
          submitSuccess={submitSuccess}
        />
      )}

      {submitSuccess && (
        <Success email={email} setSubmitSuccess={setSubmitSuccess} setEmail={setEmail} />
      )}
    </main>
  )
}

export default Content