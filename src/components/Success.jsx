import React from 'react'
import { GoCheckCircleFill } from 'react-icons/go'

const Success = ({ email, setSubmitSuccess, setEmail }) => {
  return (
    <div className='success'>
        <div className='success-icon'>
            <GoCheckCircleFill />
        </div>
        <h3>Thanks for subscribing!</h3>
        <p>A confirmation email has been sent to <strong>{email}</strong>. Please open it and click the button inside to confirm subscription.</p>
        <button 
            onClick={() => {
                setSubmitSuccess(false)
                setEmail('')
            }}
        >Dismiss message</button>
    </div>
  )
}

export default Success