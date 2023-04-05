import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'
import CalcITC from '../calcITC/calc'
import './index.css'

// 2.1.3. Special Allowance
// 2.1.4. Transport Allowance
// 2.1.5. Other Allowances
// 2.1.6. Leave Travel Allowance (LTA)
// 2.1.7. Reimbursements (Medical, Fuel, etc.)
// 2.1.8. Employer's Contribution to Provident Fund
// 2.1.9. Income Tax Deducted at Source (TDS)

function IncomeSources() {
  const [open, setOpen] = useState(true)
  const [incomeDetails, setIncomeDetails] = useState({
    basicSalary: '',
    HRA: '',
    specialAllowance: '',
    transportAllowance: '',
    LTA: '',
    TDS: '',
    shortTermCapitalGains: '',
    longTermCapitalGains: '',
    interestIncome: '',
    incomeFromBusiness: '',
    incomeFromHouseProperty: '',
    OtherMiscellaneousIncome: '',
  })

  const handleOnclick = () => {
    setOpen(!open)
    // let incomeDetailsObj = incomeDetails
  }

  const handleBasicSalary = (e) => {
    setIncomeDetails({ ...incomeDetails, basicSalary: e.target.value })
  }

  const handleHRA = (e) => {
    setIncomeDetails({ ...incomeDetails, HRA: e.target.value })
  }

  const handleSpecialAllowance = (e) => {
    setIncomeDetails({ ...incomeDetails, specialAllowance: e.target.value })
  }

  const handleTransportAllowance = (e) => {
    setIncomeDetails({ ...incomeDetails, transportAllowance: e.target.value })
  }

  const handleTds = (e) => {
    setIncomeDetails({ ...incomeDetails, TDS: e.target.value })
  }

  const handleLTA = (e) => {
    setIncomeDetails({ ...incomeDetails, LTA: e.target.value })
  }

  const handleShortTermCapitalGains = (e) => {
    setIncomeDetails({
      ...incomeDetails,
      shortTermCapitalGains: e.target.value,
    })
  }

  const handleLongTermCapitalGains = (e) => {
    setIncomeDetails({
      ...incomeDetails,
      longTermCapitalGains: e.target.value,
    })
  }

  const handleInterestIncome = (e) => {
    setIncomeDetails({
      ...incomeDetails,
      interestIncome: e.target.value,
    })
  }

  const handleIncomeFromHouseProperty = (e) => {
    setIncomeDetails({
      ...incomeDetails,
      incomeFromHouseProperty: e.target.value,
    })
  }

  const handleIncomeFromBusiness = (e) => {
    setIncomeDetails({
      ...incomeDetails,
      incomeFromBusiness: e.target.value,
    })
  }

  const handleOtherMiscellaneousIncome = (e) => {
    setIncomeDetails({
      ...incomeDetails,
      OtherMiscellaneousIncome: e.target.value,
    })
  }

  return (
    <div style={{ backgroundColor: '#ede9e8', padding: '20px' }}>
      <div className="left-header">
        <h3 className="headind">2.Income Sources</h3>
      </div>
      <hr />
      <Collapse in={open}>
        <div id="example-collapse-text" className="align">
          <div id="salary">
            <h4 style={{ marginLeft: '50px' }}>salary</h4>
            <div className="left">
              <form className="form">
                <label htmlFor="salary">Basic Salary</label>
                <input
                  id="salary"
                  type="number"
                  onChange={handleBasicSalary}
                  value={incomeDetails.basicSalary}
                />
                <label htmlFor="sa">Special Allowance</label>
                <input
                  id="sa"
                  type="number"
                  onChange={handleSpecialAllowance}
                  value={incomeDetails.specialAllowance}
                />
                <label htmlFor="LTA">Leave Travel Allowance (LTA)</label>
                <input
                  id="LTA"
                  type="number"
                  onChange={handleLTA}
                  value={incomeDetails.LTA}
                />
                <label htmlFor="TA">Transport Allowance</label>
                <input
                  id="TA"
                  type="number"
                  onChange={handleTransportAllowance}
                  value={incomeDetails.transportAllowance}
                />
                <label htmlFor="HRA">House Rent Allowance (HRA)</label>
                <input
                  id="HRA"
                  type="number"
                  onChange={handleHRA}
                  value={incomeDetails.HRA}
                />
                <label htmlFor="TDS">Income Tax Deducted at Source (TDS)</label>
                <input
                  id="TDS"
                  type="number"
                  onChange={handleTds}
                  value={incomeDetails.TDS}
                />
              </form>
            </div>
          </div>
          <div id="capital-other">
            <h4 className="cp-heading">Capital Gains</h4>
            <form className="form">
              <label htmlFor="stg">Short-Term Capital Gains</label>
              <input
                id="stg"
                type="number"
                onChange={handleShortTermCapitalGains}
                value={incomeDetails.shortTermCapitalGains}
              />
              <label htmlFor="stg">Long-Term Capital Gains</label>
              <input
                id="stg"
                type="number"
                onChange={handleLongTermCapitalGains}
                value={incomeDetails.longTermCapitalGains}
              />
            </form>
            <h4 className="cp-heading">Other Income</h4>
            <form className="form">
              <label htmlFor="Interest">
                Interest Income (Savings Account, Fixed Deposits, etc.)
              </label>
              <input
                id="Interest"
                type="number"
                onChange={handleInterestIncome}
                value={incomeDetails.interestIncome}
              />
              <label htmlFor="business">
                Income from Business / Profession
              </label>
              <input
                id="business"
                type="number"
                onChange={handleIncomeFromBusiness}
                value={incomeDetails.incomeFromBusiness}
              />
              <label htmlFor="house">Income from House Property</label>
              <input
                id="house"
                type="number"
                onChange={handleIncomeFromHouseProperty}
                value={incomeDetails.incomeFromHouseProperty}
              />
              <label htmlFor="other">
                Other Miscellaneous Income(Agriculture etc)
              </label>
              <input
                id="other"
                type="number"
                onChange={handleOtherMiscellaneousIncome}
                value={incomeDetails.OtherMiscellaneousIncome}
              />
            </form>
          </div>
        </div>
      </Collapse>
      <Button
        onClick={handleOnclick}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="button"
      >
        save income Details
      </Button>
      <CalcITC incomeDetails={incomeDetails} />
    </div>
  )
}

export default IncomeSources
