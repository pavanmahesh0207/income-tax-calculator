import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'
import CalcITC from '../calcITC/calc'
import './index.css'

function PersonalDetails() {
  const [open, setOpen] = useState(true)
  const [personalDetails, setPersonalDetails] = useState({
    name: '',
    age: '',
    gender: '',
    residence: '',
  })

  const handleOnclick = () => {
    setOpen(!open)
    let personalDetailsObj = personalDetails
    console.log(personalDetailsObj)
  }

  const handleName = (e) => {
    setPersonalDetails({ ...personalDetails, name: e.target.value })
  }

  const handleAge = (e) => {
    setPersonalDetails({ ...personalDetails, age: e.target.value })
  }

  const handleGender = (e) => {
    setPersonalDetails({ ...personalDetails, gender: e.target.value })
  }

  const handleResidence = (e) => {
    setPersonalDetails({ ...personalDetails, residence: e.target.value })
  }

  return (
    <div style={{ backgroundColor: '#ede9e8', padding: '20px' }}>
      <div className="left-header">
        <h3>1.personal details</h3>
        {/* <button>Toggle</button> */}
      </div>
      <hr />
      <Collapse in={open}>
        <div id="example-collapse-text">
          <div className="left">
            <form className="form">
              <label htmlFor="name">name</label>
              <input
                id="name"
                type="text"
                onChange={handleName}
                value={personalDetails.name}
              />
              <label htmlFor="age">Age</label>
              <input
                id="age"
                type="number"
                onChange={handleAge}
                min="18"
                value={personalDetails.age}
              />
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                onChange={handleGender}
                value={personalDetails.gender}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <label htmlFor="residence">Residential Status</label>
              <select
                id="residence"
                onChange={handleResidence}
                value={personalDetails.residence}
              >
                <option value="Non-Resident">Non-Resident</option>
                <option value="Resident">Resident</option>
                <option value="Resident but Not Ordinary Resident">
                  Resident but Not Ordinary Resident
                </option>
              </select>
            </form>
            {/* <button className="save">Save</button> */}
          </div>
        </div>
      </Collapse>
      <Button
        onClick={handleOnclick}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="button"
      >
        save personal details
      </Button>
      <CalcITC personalDetails={personalDetails} />
    </div>
  )
}

export default PersonalDetails
