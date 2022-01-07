import React, { useRef, useEffect } from 'react'

import './EdiXualCreationsContact.css'

function EdiXualCreationsContact() {
  const spinLoaderRef = useRef()
  const successMessageRef = useRef()
  const setInputWidth = () => {
    let inputs = document.querySelectorAll('.input-section input')
    let widths = ['70%', '80%', '90%', '90%', '80%', '70%']
    inputs.forEach((input, i) => {
      input.style.width = widths[i]
    })
  }
  const submitListener = (event) => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzy1dPuC9ldt3YGt96fbddUR-LqG4a4M3PFoJ3oEZij_IdPKnNMpvx10rlZCTbiRiY/exec'
    const form = document.forms['creation-form']
    form.style.display = 'none'
    spinLoaderRef.current.style.display = 'block'
    event.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(submitSuccessful)
      .catch(error => console.error('Error!', error.message))
  }
  const submitSuccessful = () => {
    spinLoaderRef.current.style.display = 'none'
    successMessageRef.current.style.display = 'block'
  }

  useEffect(() => {
    setInputWidth()
  })
  useEffect(() => {
    const form = document.forms['creation-form']
    form.addEventListener('submit', submitListener)
    return () => {
      form.removeEventListener('submit', submitListener)
    }
  })

  return (
    <div className='form-grid'>
      <div className='form-container'>
        <form className='creation-form' method='post' autoComplete='on' name='creation-form'>
          <div className='input-section'>
            <input type="text" id="firstName" name="First Name" placeholder='First Name' maxLength='24' required />
          </div>
          <div className='input-section'>
            <input type="text" id="lastName" name="Last Name" placeholder='Last Name' maxLength='24' required />
          </div>
          <div className='input-section'>
            <input type="text" id="compName" name="Company Name" placeholder='Company Name' maxLength='36' required />
          </div>
          <div className='input-section'>
            <textarea id="work" name="Project Detail" placeholder='Details about the project ( 120 characters )' maxLength='120' required></textarea>
          </div>
          <div className='input-section'>
            <input type="emailId" id="email" name="Email" placeholder='something@email.com' maxLength='36' required />
          </div>
          <div className='input-section'>
            <input type="number" id="contact" name="Contact" placeholder='Contact Number' minLength='10' maxLength='10' required />
          </div>
          <div className='input-section'>
            <input type="submit" value="Submit" />
          </div>
        </form>
        <div ref={spinLoaderRef} className='spin-loader'></div>
        <div ref={successMessageRef} className='success'>
          <div className='tick'><span></span></div>
          <h1>We're looking forward to working with you</h1>
        </div>
      </div>
      <div className='form-container'>
        <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.0265256230905!2d72.82417561412566!3d19.194043753240916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7b8f108ace3%3A0xb6fcb399b949c48!2sEdiXual%20Creations!5e0!3m2!1sen!2sin!4v1634713756588!5m2!1sen!2sin" allowFullScreen="" loading="lazy"></iframe>
        <p>Meet us at our office.</p>
      </div>
    </div>
  )
}

export default EdiXualCreationsContact
