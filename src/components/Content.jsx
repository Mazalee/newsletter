import React, { useEffect, useState } from 'react'
import { items } from './Item'
import Actions from './Actions'
import Success from './Success';

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
  }

  if(submitSuccess) {
    <Success email={email} />
  }
  return (
    <main>
      <section className='main-section'>      
        <div className="left-section">
          <div className="news-section">
            <h3>Stay updated!</h3>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            {items.map((item) => (
              <Actions key={item.id} {...item} />
            ))}
            <div className='email-header'>
              <h6>Email address</h6>
              {errorMessage && <h6 className='invalid'>Valid email required</h6>}
            </div>
            <form onSubmit={handleSubmit} className='form-submit'>
              <input type='text' name='email' placeholder='email@company.com' value={email} onChange={(e) => setEmail(e.target.value)} />
              <button type='submit'>Subscribe to monthly newsletter</button>
            </form>
          </div>
        </div>

        <div className="right-section">
            <div className="styled-image"></div>
        </div>
      </section>
    </main>
  )
}

export default Content