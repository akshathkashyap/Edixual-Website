import React, {useState, useEffect} from 'react'

import './EXCOriginalsJobAppForm.css'

function EXCOriginalsJobAppForm() {
  const [fName, setFName] = useState('First Name')
  const [lName, setLName] = useState('Last Name')
  const [cName, setCName] = useState('Company Name')
  const [workDet, setWorkDet] = useState("work with me on something")
  const [email, setEmail] = useState('E-Mail')
  const [pCon, setPCon] = useState('Personal Contact')
  const fNameInputListener = () => {
    var fNameInput = document.querySelector('#fName')
    fNameInput.value === '' ? setFName('First Name') : setFName(`${fNameInput.value}`)
  }
  const lNameInputListener = () => {
    var lNameInput = document.querySelector('#lName')
    lNameInput.value === '' ? setLName('Last Name') : setLName(`${lNameInput.value}`)
  }
  const cNameInputListener = () => {
    var cNameInput = document.querySelector('#cName')
    cNameInput.value === '' ? setCName('Company Name') : setCName(`${cNameInput.value}`)
  }
  const workDetInputListener = () => {
    var workDetInput = document.querySelector('#workDet')
    workDetInput.value === '' ? setWorkDet("work with me on something") : setWorkDet(`${workDetInput.value}`)
  }
  const pConInputListener = () => {
    var pConInput = document.querySelector('#pCon')
    pConInput.value === '' ? setPCon("work with me on something") : setPCon(`${pConInput.value}`)
  }
  const submitListener = (event) => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzs6YwxPNjC3ROQlUWj-qp4z7UQp8cB-7lVhRQFSrSpTVlp7KW9BecGPwpMUe0aa2OL-w/exec'
    const form = document.forms['enquiry-form']
    event.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(submitSuccessful)
      .catch(error => console.error('Error!', error.message))
  }
  const submitSuccessful = () => {
    const successText = document.querySelector('#formRes')
    successText.classList.remove('hidden')
    setEmail(document.querySelector('#email').value)
  }

  useEffect(() => {
    const form = document.forms['enquiry-form']
    form.addEventListener('submit', submitListener)
    return () => {
      form.removeEventListener('submit', submitListener)
    }
  })

  return (
    <div className="job-app-form section-container">
      <h1 className="section-title">enquiry form</h1>
      <p className='mad-libs'><span className='texter'>EXCOriginals: </span><br/>What brings you here?</p>
      <p className='mad-libs'><span className='texter'>Me: </span><br/>Hi, my name is <span>{fName}</span> <span>{lName}</span> and i would like to know if you can work on <span>{workDet}</span> with me / my company.</p>
      <p className='mad-libs hidden' id='formRes'><span className='texter'>EXCOriginals: </span><br/>That sounds fun <span>{fName}</span>. We'll get back to you shortly. You shall recieve a mail on <span>{email}</span> or we'll give you a call on <span>{`+91 ${pCon}`}</span>.</p>
      <form className='enquiry-form' method='post' autoComplete='on' name='enquiry-form'>
        <div className='input'>
          <input type="text" id="fName" name="First Name" placeholder='First Name' maxlength='24' required onInput={fNameInputListener} />
        </div>
        <div className='input'>
          <input type="text" id="lName" name="Last Name" placeholder='Last Name' maxlength='24' required onInput={lNameInputListener} />
        </div>
        <div className='input'>
          <input type="text" id="cName" name="Company Name" placeholder='Company Name' maxlength='36' required onInput={cNameInputListener} />
        </div>
        <div className='input'>
          <textarea id="workDet" name="Work Detail" placeholder='Work with us on... ( 120 characters )' maxlength='120' required onInput={workDetInputListener}></textarea>
        </div>
        <div className='input'>
          <input type="email" id="email" name="Email" placeholder='something@email.com' maxlength='36' required />
        </div>
        <div className='input'>
          <input type="number" id="pCon" name="Personal Contact" placeholder='Personal Contact Number' minlength='10' maxlength='10' required onInput={pConInputListener} />
        </div>
        <div className='input'>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default EXCOriginalsJobAppForm
