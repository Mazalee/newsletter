import React from 'react'
import { items } from './Item'
import Actions from './Actions'

const DefaultModal = ({ 
    errorMessage, 
    handleSubmit, 
    setEmail, 
    email,
    submitSuccess
}) => {
  return (
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
                <input type='text' name='email' className='input-success' style={{ border: `${!submitSuccess ? '' : '2px solid red'}`}}
                placeholder='email@company.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type='submit'>Subscribe to monthly newsletter</button>
              </form>
            </div>
          </div>

          <div className="right-section">
              <div className="styled-image"></div>
          </div>
        </section>
  )
}

export default DefaultModal