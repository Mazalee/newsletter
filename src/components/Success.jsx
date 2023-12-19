import React from 'react'
import { GoCheckCircleFill } from 'react-icons/go'

const Success = ({ email }) => {
  return (
    <div className='success'>
        <div className='success-icon'>
            <GoCheckCircleFill />
        </div>
        <h3>Thanks for subscribing!</h3>
        <p>A confirmation email has been sent to {email}. Please open it and click the button inside to confirm subscription.</p>
        <button>Dismiss message</button>
    </div>
  )
}

export default Success